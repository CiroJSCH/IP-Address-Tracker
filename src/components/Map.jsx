// Libraries
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

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
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(true);

  const { ip } = useContext(LocationContext);

  useEffect(() => {
    // Api_KEY = at_xPWsxj4AY3gk0NPyWW7kPuyPsIZSF
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_xPWsxj4AY3gk0NPyWW7kPuyPsIZSF&ipAddress=${ip}`
      )
      .then((response) => {
        setInformation(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
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
        >
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
          <Marker
            position={[
              information["location"]["lat"],
              information["location"]["lng"],
            ]}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
