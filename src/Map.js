import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '600px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAeJJbGFLxTKO8Q94h3gurjQh4ZFrRRTMc">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default Map;