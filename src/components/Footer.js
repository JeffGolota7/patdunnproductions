import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">Pat Dunn Productions 2023</div>
        <div className="right">
          <ul className="socials">
            <li className="social-link">
              <a
                href="https://www.instagram.com/pat_dunn_productions/"
                style={{ cursor: "pointer" }}
              >
                <BsInstagram />
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.linkedin.com/in/patrickadunn/"
                style={{ cursor: "pointer" }}
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
