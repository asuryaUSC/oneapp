// Map.jsx
'use client'

import { useRef } from 'react';

// import and use components as usual
import { MapContainer, TileLayer, ZoomControl } from './MapComponents';

const Map = (props) => {
  const mapRef = useRef(null);
  return (
    <MapContainer
      ref={mapRef}
      touchZoom={false}
      zoomControl={false}
      style={{ height: '100%', width: '100%', zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        style={{ zIndex: 0 }}
      />
      <ZoomControl position="topright" style={{ zIndex: 10 }} />
    </MapContainer>
  );
};

export default Map;
