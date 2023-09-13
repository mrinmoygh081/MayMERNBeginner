import React, { useEffect, useRef, useState } from "react";

const GMap = () => {
  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, []);

  console.log(map);

  useEffect(() => {
    if (!map) return;

    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();
    var kolkata = new window.google.maps.LatLng(22.5355649, 88.2649509);
    var malda = new window.google.maps.LatLng(25.0073709, 88.0968119);
    var request = {
      origin: kolkata,
      destination: malda,
      travelMode: "DRIVING",
    };
    directionsService.route(request, function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
      }
    });
  }, [map]);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: new window.google.maps.LatLng(37.7699298, -122.4469157),
      zoom: 8,
    });
  };

  return <div ref={googleMapRef} style={{ width: 600, height: 500 }} />;
};

export default GMap;
