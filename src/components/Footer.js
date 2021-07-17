import React from "react";
import "../css/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";
import { GiAlmond } from "react-icons/gi";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <ul className="foot-list">
          <li className="foot-list-a">
            <div className="footer-item">
              <h4 className="footer-item-a" hreh="">
                Projects
              </h4>
            </div>
            <div>
              <ul className="footer-list">
                <li className="footer-list-items">
                  <a href="">projec1</a>
                </li>
                <li className="footer-list-items">
                  <a href="">project red</a>
                </li>
                <li className="footer-list-items">
                  <a href="">project sky</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Divine</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="foot-list-a">
            <div className="footer-item">
              <h4 className="footer-item-a" hreh="">
                About
              </h4>
            </div>
            <div>
              <ul className="footer-list">
                <li className="footer-list-items">
                  <a href="">History</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Mission</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Report</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="foot-list-a">
            <div className="footer-item">
              <h4 className="footer-item-a" hreh="">
                Branch
              </h4>
            </div>
            <div>
              <ul className="footer-list">
                <li className="footer-list-items">
                  <a href="">North India</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Chennai</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Mumbai</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Madurai</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="foot-list-a">
            <div className="footer-item">
              <h4 className="footer-item-a" hreh="">
                Media
              </h4>
            </div>
            <div>
              <ul className="footer-list">
                <li className="footer-list-items">
                  <a href="">News</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Videos</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Photos</a>
                </li>
                <li className="footer-list-items">
                  <a href="">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">
              <FaFacebook id="fb"  className="share-icon" size="32px" />
            </a>
            <a href="">
              <FaTwitter id="tw" className="share-icon" size="32px" />
            </a>
            <a href="">
              <FaWhatsapp id="wa" className="share-icon" size="32px" />
            </a>
            <a href="">
              <FaYoutube id="yt" className="share-icon" size="32px" />
            </a>
          </li>
          <li className='foot-contact'>
            <h4 className='reach-us-btn'>Reach us</h4>
            <p>
              91+ 9940291408
              <br />
              Lead integrated business Pvt.Ltd.
              <br />
              No.20,Appar st,Kamakodi nagar,
              <br />
              Valasaravakkam, Chennai-87
              <br />
            </p>
          </li>
        </ul>
      </div>
      <p className='foot-copyright'>
        <FaRegCopyright />
        Lead integrated business Pvt.Ltd.,All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
