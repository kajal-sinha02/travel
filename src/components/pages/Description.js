// App.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Description.css";
import L from "leaflet";

// Fixing default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function App() {
  const [readMore, setReadMore] = useState(false);
  const extraText = readMore ? "" : " ...more";

  return (
    <div className="road-trip-overview">
      <div className="text-section">
        <h1 style={{fontSize :"25px"}}>A little about Greece</h1>
        <p>
          India is known for its diverse landscape, which encompasses a wide range
          of geographical features and natural resources. From the towering peaks
          of the Himalayas in the north to the pristine beaches of the south,
          India’s geography is shaped by its location, climate, and history,
          resulting in a rich variety of flora, fauna, and ecosystems. In the
          northern part of India, the snow-capped Himalayan mountain range
          dominates the landscape, with its high-altitude lakes, alpine forests,
          and glaciers. The region is home to several of India’s major rivers,
          such as the Ganges, Brahmaputra, and Indus, which provide water to
          millions of people and support a rich biodiversity of wildlife. Moving
          towards the west, the Thar desert covers much of Rajasthan.
          {readMore && (
            <>
              {" "}
              Other regions include the Eastern Ghats, the Western Ghats, the
              lush tea plantations of Assam, and the vast plateaus of the Deccan.
              Each road trip unveils India’s rich cultural diversity, its history
              of civilizations, and its contrasting natural beauty, making India
              a perfect place for those who wish to explore through road trips.
            </>
          )}
          <button
            className="read-more-toggle"
            onClick={() => setReadMore(!readMore)}
            aria-expanded={readMore}
          >
            {extraText}
          </button>
        </p>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <MapContainer
          center={[20.5937, 78.9629]} // Centering the map to India
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Example Markers */}
          <Marker position={[28.7041, 77.1025]}> {/* Delhi */}
            <Popup>Delhi, India</Popup>
          </Marker>
          <Marker position={[19.076, 72.8777]}> {/* Mumbai */}
            <Popup>Mumbai, India</Popup>
          </Marker>
          <Marker position={[12.9716, 77.5946]}> {/* Bangalore */}
            <Popup>Bangalore, India</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
