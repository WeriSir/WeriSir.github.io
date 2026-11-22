import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import L from 'leaflet';
import { Compass, MapPin, Maximize2 } from 'lucide-react';
import type { Locale, ThemeMode } from '../types/content';
import { locationsData } from '../data/locations';
import { uiStrings } from '../data/profile';

interface ResearchMapTimelineProps {
  locale: Locale;
  theme: ThemeMode;
}

export function ResearchMapTimeline({ locale, theme }: ResearchMapTimelineProps) {
  const [activeId, setActiveId] = useState<string>(locationsData[0].id);
  const [tileIssue, setTileIssue] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const baseLayerRef = useRef<L.TileLayer | null>(null);
  const refLayerRef = useRef<L.TileLayer | null>(null);
  const polylineRef = useRef<L.Polyline | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  const activeLocation =
    locationsData.find((loc) => loc.id === activeId) ?? locationsData[0];

  const fitAllBounds = () => {
    const map = mapInstanceRef.current;
    if (!map) return;
    const bounds = L.latLngBounds(locationsData.map((loc) => loc.coords));
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 6 });
  };

  const focusSpbCluster = () => {
    const map = mapInstanceRef.current;
    if (!map) return;
    const spbCoords = locationsData
      .filter((loc) => loc.coords[1] < 32)
      .map((loc) => loc.coords);
    if (spbCoords.length === 0) return;
    const bounds = L.latLngBounds(spbCoords);
    map.fitBounds(bounds, { padding: [44, 44], maxZoom: 11 });
  };

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container || mapInstanceRef.current) return;

    const map = L.map(container, {
      scrollWheelZoom: false,
      zoomControl: true,
    });
    mapInstanceRef.current = map;

    const polylineCoords = locationsData.map((l) => l.coords);
    const polyline = L.polyline(polylineCoords, {
      color: theme === 'dark' ? '#3B82F6' : '#1D4ED8',
      weight: 1.6,
      opacity: 0.55,
      dashArray: '4 6',
    }).addTo(map);
    polylineRef.current = polyline;

    locationsData.forEach((loc) => {
      const icon = L.divIcon({
        className: 'research-pin-wrapper',
        html: `<div class="research-pin ${loc.category === 'conference' ? 'is-status' : ''}">${loc.order}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker(loc.coords, { icon }).addTo(map);
      marker.on('click', () => {
        setActiveId(loc.id);
      });
      markersRef.current.set(loc.id, marker);
    });

    const initialBounds = L.latLngBounds(locationsData.map((loc) => loc.coords));
    map.fitBounds(initialBounds, { padding: [36, 36], maxZoom: 6 });

    return () => {
      markersRef.current.clear();
      baseLayerRef.current = null;
      refLayerRef.current = null;
      polylineRef.current = null;
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Dynamically swap Esri Light Gray / Dark Gray basemap layers when theme changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (baseLayerRef.current) {
      map.removeLayer(baseLayerRef.current);
      baseLayerRef.current = null;
    }
    if (refLayerRef.current) {
      map.removeLayer(refLayerRef.current);
      refLayerRef.current = null;
    }

    const baseService =
      theme === 'dark' ? 'Canvas/World_Dark_Gray_Base' : 'Canvas/World_Light_Gray_Base';
    const refService =
      theme === 'dark'
        ? 'Canvas/World_Dark_Gray_Reference'
        : 'Canvas/World_Light_Gray_Reference';

    const baseTiles = L.tileLayer(
      `https://server.arcgisonline.com/ArcGIS/rest/services/${baseService}/MapServer/tile/{z}/{y}/{x}`,
      {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 16,
      },
    );

    const referenceLabels = L.tileLayer(
      `https://server.arcgisonline.com/ArcGIS/rest/services/${refService}/MapServer/tile/{z}/{y}/{x}`,
      {
        maxZoom: 16,
      },
    );

    baseTiles.on('tileerror', () => {
      setTileIssue(true);
    });
    baseTiles.on('tileload', () => {
      setTileIssue(false);
    });

    baseTiles.addTo(map);
    referenceLabels.addTo(map);
    baseLayerRef.current = baseTiles;
    refLayerRef.current = referenceLabels;

    if (polylineRef.current) {
      polylineRef.current.setStyle({
        color: theme === 'dark' ? '#60A5FA' : '#1D4ED8',
      });
    }
  }, [theme]);

  // Sync marker visual styling and tooltips whenever activeId, locale, or theme changes
  useEffect(() => {
    locationsData.forEach((loc) => {
      const marker = markersRef.current.get(loc.id);
      if (!marker) return;

      const isActive = loc.id === activeId;
      const icon = L.divIcon({
        className: 'research-pin-wrapper',
        html: `<div class="research-pin ${loc.category === 'conference' ? 'is-status' : ''} ${
          isActive ? 'is-active' : ''
        }">${loc.order}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
      marker.setIcon(icon);
      marker.setZIndexOffset(isActive ? 500 : 0);
      marker.unbindTooltip();
      marker.bindTooltip(`${loc.city[locale]} · ${loc.period}`, {
        direction: 'top',
        offset: [0, -14],
      });
    });
  }, [activeId, locale, theme]);

  const handleSelectLocation = (id: string, panToMarker: boolean) => {
    setActiveId(id);
    if (!panToMarker) return;
    const map = mapInstanceRef.current;
    const target = locationsData.find((loc) => loc.id === id);
    if (!map || !target) return;
    const targetZoom = target.coords[1] < 32 ? 10 : 6;
    map.flyTo(target.coords, targetZoom, { duration: 0.6 });
  };

  return (
    <section
      id="geography"
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--ink-primary)] sm:text-3xl">
            {uiStrings.mapSection.heading[locale]}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
            {uiStrings.mapSection.subtitle[locale]}
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Interactive Map + Active Location Dossier */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--map-bg)]">
              <div
                ref={mapContainerRef}
                aria-label={uiStrings.mapSection.heading[locale]}
                className="h-[270px] w-full sm:h-[400px]"
              />

              <div className="absolute top-3 right-3 z-[400] flex flex-wrap justify-end gap-1.5">
                <button
                  type="button"
                  onClick={focusSpbCluster}
                  className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)]/95 px-2.5 py-1.5 text-xs font-medium text-[var(--ink-primary)] shadow-sm transition-transform transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{uiStrings.mapSection.focusSpbBtn[locale]}</span>
                </button>
                <button
                  type="button"
                  onClick={fitAllBounds}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)]/95 px-3 py-1.5 text-xs font-medium text-[var(--ink-primary)] shadow-sm transition-transform transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{uiStrings.mapSection.fitAllBtn[locale]}</span>
                </button>
              </div>

              {tileIssue && (
                <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs text-[var(--ink-secondary)]">
                  {locale === 'ru'
                    ? 'Слой карты временно ограничен сетью; точки координат и маршрута активны.'
                    : locale === 'en'
                      ? 'Map tiles unavailable offline; interactive location pins remain active.'
                      : '底图瓦片当前离线受限，地理坐标点与轨迹仍可交互。'}
                </div>
              )}
            </div>

            <article className="liquid-glass rounded-xl p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--accent-primary)]">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {uiStrings.mapSection.selectedLabel[locale]} #{activeLocation.order}
                  </span>
                </div>
                <span className="font-mono-tech text-xs font-medium text-[var(--ink-secondary)]">
                  {activeLocation.period}
                </span>
              </div>

              <h3 className="mt-3 font-serif-display text-lg font-semibold text-[var(--ink-primary)]">
                {activeLocation.city[locale]} — {activeLocation.organization[locale]}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent-primary)]">
                {activeLocation.projectTitle[locale]}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
                {activeLocation.summary[locale]}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-[var(--ink-secondary)]">
                <span>{activeLocation.role[locale]}</span>
                <span className="inline-flex items-center gap-1 font-mono-tech">
                  <Compass className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
                  {activeLocation.coords[0].toFixed(4)}, {activeLocation.coords[1].toFixed(4)}
                </span>
              </div>
            </article>
          </div>

          {/* Synchronized Chronological Timeline */}
          <div className="lg:col-span-5">
            <h3 className="font-serif-display text-lg font-semibold text-[var(--ink-primary)]">
              {uiStrings.mapSection.timelineHeading[locale]}
            </h3>

            <ol className="liquid-glass mt-3 divide-y divide-[var(--border-subtle)] overflow-hidden rounded-xl">
              {locationsData.map((loc) => {
                const isActive = loc.id === activeId;
                return (
                  <li key={loc.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectLocation(loc.id, true)}
                      aria-current={isActive ? 'step' : undefined}
                      className={`w-full cursor-pointer px-4 py-3.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent-primary)] ${
                        isActive
                          ? 'bg-[var(--bg-muted)] text-[var(--ink-primary)]'
                          : 'bg-transparent text-[var(--ink-secondary)] hover:bg-[var(--bg-muted)]/60 hover:text-[var(--ink-primary)]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono-tech text-xs font-semibold ${
                            isActive
                              ? 'bg-[var(--accent-primary)] text-white'
                              : 'border border-[var(--border-strong)] bg-[var(--bg-page)] text-[var(--accent-primary)]'
                          }`}
                        >
                          {loc.order}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <span className="text-sm font-semibold text-[var(--ink-primary)]">
                              {loc.city[locale]}
                            </span>
                            <span className="font-mono-tech text-xs font-medium text-[var(--accent-primary)]">
                              {loc.period}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs font-medium text-[var(--ink-secondary)]">
                            {loc.organization[locale]}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs text-[var(--ink-muted)]">
                            {loc.projectTitle[locale]}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
