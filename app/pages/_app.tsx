// pages/_app.tsx
import '../globals.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
