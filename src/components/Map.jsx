// Libraries
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  useMap,
  CircleMarker,
  ZoomControl,
} from "react-leaflet";

// Context
import { LocationContext } from "../context/LocationContext";

// Styles
import "../styles/map.css";

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = () => {
  const { information, setInformation, ip, setError } = useContext(LocationContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ip}&domain=${ip}`
      )
      .then((response) => {
        setInformation(response.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => setError(true));
  }, [ip]);

  return (
    <>
      {!loading && (
        <MapContainer
          center={[
            information["location"]["lat"],
            information["location"]["lng"],
          ]}
          zoom={13}
          scrollWheelZoom={true}
          id="map"
          zoomControl={false}
        > 
          <ZoomControl position="bottomleft"/>
          <ChangeView
            center={[
              information["location"]["lat"],
              information["location"]["lng"],
            ]}
            zoom={13}
          />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CircleMarker
            center={[
              information["location"]["lat"],
              information["location"]["lng"],
            ]}
            pathOptions={{ color: "blue" }}
            radius={20}
          ></CircleMarker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
