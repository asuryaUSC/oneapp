// layout.tsx
import React from 'react';
import Navbar from "./components/navbar/Navbar";
import PropertyGrid from './components/grid/PropertyGrid';
import Map from './components/map/Map';

import "./globals.css";

// Define the default center and zoom for your map
const DEFAULT_CENTER = [40.7128, -74.0060]; // Example coordinates for New York City
const DEFAULT_ZOOM = 13;

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Map />
      <div id="grid-container" className="w-full mt-16">
        <PropertyGrid />
      </div>
      {children}
    </div>
  );
}
