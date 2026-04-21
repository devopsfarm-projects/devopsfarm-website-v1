'use client';
import { useEffect, useRef } from 'react';

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    import('leaflet').then((L) => {
      // Custom SVG marker - no external image needed
      const svgIcon = L.divIcon({
        html: `
          <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 26 16 26S32 26 32 16C32 7.163 24.837 0 16 0z" fill="#3B82F6"/>
            <circle cx="16" cy="16" r="7" fill="white"/>
          </svg>
        `,
        className: '',
        iconSize: [32, 42],
        iconAnchor: [16, 42],
        popupAnchor: [0, -42],
      });

      const map = L.map(mapRef.current!).setView([26.275008873585936, 73.03122631992909], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      L.marker([26.275008873585936, 73.03122631992909], { icon: svgIcon })
        .addTo(map)
        .bindPopup('<b>DevOpsFarm</b><br>Bhaskar Circle, Jodhpur')
        .openPopup();

      mapInstanceRef.current = map;
    });

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, []);

 return (
  <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
    <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
     <div ref={mapRef} style={{ height: '250px', width: '250px' }} />
      <a
        href="https://www.google.com/maps?q=26.275008873585936,73.03122631992909"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#3B82F6',
          color: 'white',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '600',
          textDecoration: 'none',
          zIndex: 1000,
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        📍 View on Google Maps
      </a>
    </div>
  </>
);
};