import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Check us out on social media</h3>
        <p>
          Our partnerships with our health care practitioners is very important
          to us. We understand the essential role assessments and consultations
          play in successfully pairing the right nutritional supplements with
          individual health needs. Learn more about our holistic approach to
          advancing health.
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
