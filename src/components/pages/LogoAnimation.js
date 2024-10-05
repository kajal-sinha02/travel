import React from "react";
import "./LogoAnimation.css";

const LogoAnimation = () => {
  return (
    <div className="logo-marquee">
      <div className="head">
        <p>Tourism Board Alliance</p>

      </div>
      {/* <h2>Tourism Board Alliances</h2> */}
      <div className="logo-track">
        {/* Duplicate logos for seamless scrolling */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="France" />
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/tourism/images/slider/1150x412-01.jpg" alt="Abu Dhabi" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="Jordan" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqn3yheO4kCBMkFldLAUqlZMIXpwB4gifROg&s" alt="Saudi" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="Dubai" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="Singapore" />
        {/* Duplicated for seamless scrolling */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="Abu Dhabi" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="Jordan" />
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/tourism/images/slider/1150x412-01.jpg" alt="Saudi" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="Dubai" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQvABzlYp2_9zE1qpugalky1IvVodMk5YQ&s" alt="Singapore" />
      </div><div className="horizontal-line"></div>
    </div>
  );
};

export default LogoAnimation;
