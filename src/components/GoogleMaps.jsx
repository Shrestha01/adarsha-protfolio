import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Map container style
const mapContainerStyle = {
  width: "50%",
  height: "200px",
};

// Default center (15a Dallington Crescent, Balga, WA 6061)
const defaultCenter = {
  lat: -31.85630975975855,
  lng: 115.83679874308264,
};

// Default zoom level
const defaultZoom = 12;

const GoogleMaps = () => {
  // Load the Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "", // Replace with your API key
  });

  // Handle loading errors
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={defaultZoom}
      center={defaultCenter}
    >
      {/* Add a marker */}
      <Marker position={defaultCenter} />
    </GoogleMap>
  );
};

export default GoogleMaps;
