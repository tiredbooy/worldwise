/* eslint-disable */

import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";


function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);


  return (
    <div className={styles.mapContainer}>

      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
          <Marker
            position={mapPosition}
          >
            <Popup>
              <span>This is the map</span>
            </Popup>
          </Marker>

      </MapContainer>
    </div>
  );
}


export default Map;
