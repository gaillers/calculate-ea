import L from 'leaflet';

export interface MapConfig extends L.MapOptions {
    gestureHandling: boolean;
    zoomControl: boolean;
    scrollWheelZoom: boolean;
    inertia: boolean;
}

export interface TileLayerConfig extends L.TileLayerOptions {
    maxZoom?: number;
    minZoom?: number;
    attribution?: string;
}

export interface MapViewConfig {
    center: [number, number];
    zoom: number;
}

export interface MapSetup extends MapConfig {
    view: MapViewConfig;
}
