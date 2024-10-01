import React , {useState}from "react";
import Slider from "react-slick";
import "./Destination.css";

const Destination = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/50" alt="Abu Dhabi" />
          <p>Abu Dhabi</p>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/50" alt="Norway" />
          <p>Norway</p>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/50" alt="Kerala" />
          <p>Kerala</p>
        </div>
        <div className="carousel-item trending">
          <img src="https://via.placeholder.com/50" alt="Bali" />
          <p>Bali</p>
          <span className="trending-badge">Trending</span>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/50" alt="Rajasthan" />
          <p>Rajasthan</p>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/50" alt="Vietnam" />
          <p>Vietnam</p>
        </div>
        <div className="carousel-item trending">
          <img src="https://via.placeholder.com/50" alt="Ladakh" />
          <p>Ladakh</p>
          <span className="trending-badge">Trending</span>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/50" alt="South Africa" />
          <p>South Africa</p>
        </div>
      </Slider>
      </div>
      
      <div className="buttons">
  <button
    className={`toggle-button ${activeTab === "Tours" ? "active" : ""}`}
    onClick={() => setActiveTab("Tours")}
  >
    Tours
  </button>
  <button
    className={`toggle-button ${activeTab === "Activities" ? "active" : ""}`}
    onClick={() => setActiveTab("Activities")}
  >
    Activities
  </button>
</div>

    </div>
  );
};

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ background: "#ccc", borderRadius: "50%" }}>
      &gt;
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ background: "#ccc", borderRadius: "50%" }}>
      &lt;
    </div>
  );
}

export default Destination;
