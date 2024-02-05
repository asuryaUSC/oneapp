// MapLazyComponents.jsx
import {
    MapContainer as LeafletMapContainer,
  } from 'react-leaflet';
  
  export const MapContainer = ({ forwardedRef, ...props }) => (
    <LeafletMapContainer {...props} ref={forwardedRef} />
  );
  