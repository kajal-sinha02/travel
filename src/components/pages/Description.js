
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Description.css";

function App() {
  const [readMore, setReadMore] = useState(false);
  const extraText = readMore ? "" : " ...more";

  return (
    <div className="road-trip-overview">
      <div className="text-section">
        <h1>A little about Greece</h1>
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
          <span
            className="read-more-toggle"
            onClick={() => setReadMore(!readMore)}
          >
            {extraText}
          </span>
        </p>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <MapContainer
          center={[20.5937, 78.9629]} // Centering the map to India
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
           <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29682515.57069143!2d70.14313786615844!3d22.30685320217602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e7f856e3e609f%3A0x37a6794396b19f1d!2sIndia!5e0!3m2!1sen!2sus!4v1700112078633!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
      <div style={{height : "500px"}}></div>
    </div>
  );
}

export default App;
