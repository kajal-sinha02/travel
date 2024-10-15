import React from "react";
import "../css/Footer.css";


const Footer = () => {
  return (
    <div className="container">
      {/* <div className="content" style={{ width: "1000px" }}>
        <div className="about-section">
          <h3>ABOUT THRILLOPHILIA</h3>
          <ul>
            <li>About Us</li>
            <li>Thrillophilia Reviews</li>
            <li>Privacy Policies</li>
            <li>Copyright Policies</li>
            <li>Support</li>
            <li className="warning">Beware of Frauds</li>
          </ul>
        </div>

        <div className="suppliers-section">
          <h3>FOR SUPPLIERS</h3>
          <ul>
            <li>List Your Activities</li>
          </ul>
          <h3>FOR BRANDS</h3>
          <ul>
            <li>Partner With Us</li>
            <li>Destination Marketing</li>
          </ul>
        </div>

        <div className="travellers-section">
          <h3>FOR TRAVELLERS</h3>
          <ul>
            <li>Gift An Experience</li>
          </ul>
        </div>

        <div className="destinations-section">
          <h3>TRAVEL DESTINATIONS</h3>
          <div className="destinations-grid">
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)",
              }}
            >
              Bali
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/8xtcwkg4c17tt1t85xtoqlog6j99_shutterstock_1282523707.jpg?w=340&dpr=2)",
              }}
            >
              Dubai
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/mspxuaj2rkl4kn61qiison1hh7im_ndrkvr49svb0s1xve28dzmozahs5_IMG20230321183838_01-01.jpg?w=auto&h=600)",
              }}
            >
              Singapore
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/o5mthnirc88oqt0urede9xfr6nwk_shutterstock_2414542203.jpg?w=340&dpr=2)",
              }}
            >
              Thailand
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/m21dqlu4lf2ekp42vrofmxeqklpl_shutterstock_1118600486.jpg?w=340&dpr=2)",
              }}
            >
              Andaman
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/mi1hujt87wfa8b41pmxmpy8e713q_shutterstock_2446462209.jpg?w=340&dpr=2)",
              }}
            >
              India
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/91auwe9632in9yhrixuqzuznmolq_1556193320_marina2.jpg?w=240&dpr=2)",
              }}
            >
              Ladakh
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/tt2p0hxisk3xixhbj08sxgfli153_7wcsxreqzgfwfd7icvmvparvwni8_1465888976_ap5.jpg?w=240&dpr=2)",
              }}
            >
              Hong Kong
            </div>
            <div
              className="destination"
              style={{
                backgroundImage:
                  "url(https://media1.thrillophilia.com/filestore/rbfpnbim9d5uw3iuwfcjk928yy5j_29d07cda-b6e3-447f-a225-2b55cea6b159-2545-dubai-dubai-aquarium---underwater-zoo---burj-khalifa-combo-02.jpg?w=580&dpr=2)",
              }}
            >
              Sri Lanka
            </div>
          </div>
        </div>
      </div> */}

      <footer className="footer">
        <div style={{ height: "100px" }}></div>
        <h2>travassurance.com</h2>
        <div style={{ height: "200px" }}></div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>

        <p style={{ fontSize: "15px", color: "grey" }}>
          © 2024 travassurance.com All rights reserved.
        </p>

        <h4>
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </h4>

        <div style={{ height: "100px" }}></div>
      </footer>
    </div>
  );
};

export default Footer;
