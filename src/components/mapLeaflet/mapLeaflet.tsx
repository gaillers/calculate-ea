import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import { useEffect, useRef } from 'react';
import { LeafletWrap, Leaflet } from './mapLeafletStyles';

import { MapSetup, TileLayerConfig } from '@/types/MapLeafletProps';

const MapLeaflet: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            const mapSetup: MapSetup = {
                gestureHandling: true,
                zoomControl: true,
                scrollWheelZoom: true,
                inertia: false,
                view: {
                    center: [39.753512, -97.5948317],
                    zoom: 5,
                },
            };

            const tileLayerConfig: TileLayerConfig = {
                maxZoom: 14,
                minZoom: 4,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            };

            mapInstance.current = L.map(
                mapRef.current, 
                mapSetup
            ).setView(
                mapSetup.view.center, 
                mapSetup.view.zoom
            );

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', tileLayerConfig).addTo(mapInstance.current);
        }

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    return (
        <>
            <LeafletWrap>
                <Leaflet ref={mapRef} />
            </LeafletWrap>

        </>
    )
};

export default MapLeaflet;
