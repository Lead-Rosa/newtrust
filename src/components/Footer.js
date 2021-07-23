import React from "react";
import classes from '../css/FoundationStyles.module.css';
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";

function Footer() {
  return (

    <footer className={classes.footer}>
      <div>
        <ul className={classes.footer_ul_list}>
          <li className={classes.foot_list_a}>
            <div className={classes.footer_item}>
              <h4 className={classes.footer_item_a}>
                Projects
              </h4>
            </div>
            <div>
              <ul className={classes.footer_list}>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">projec1</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">project red</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Project sky</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Divine</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={classes.foot_list_a}>
            <div className={classes.footer_item}>
              <h4 className={classes.footer_item_a}>
                About
              </h4>
            </div>
            <div>
              <ul className={classes.footer_list}>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">History</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Mission</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Report</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={classes.foot_list_a}>
            <div className={classes.footer_item}>
              <h4 className={classes.footer_item_a}>
                Branch
              </h4>
            </div>
            <div>
              <ul className={classes.footer_list}>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">North India</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Chennai</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Mumbai</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Madurai</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={classes.foot_list_a}>
            <div className={classes.footer_item}>
              <h4 className={classes.footer_item_a}>
                Media
              </h4>
            </div>
            <div>
              <ul className={classes.footer_list}>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items} href="#">News</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Videos</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Photos</a>
                </li>
                <li className={classes.footer_list_items}>
                  <a className={classes.list_sub_items}href="#">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h4 className={classes.follow_h2}>Follow on</h4>
            <a className={classes.list_sub_items}href="#"> 
              <FaFacebook id={classes.fb}  className={classes.share_icon} size="32px" />
            </a>
            <a className={classes.list_sub_items}href="#">
              <FaTwitter id={classes.tw} className={classes.share_icon} size="32px" />
            </a>
            <a className={classes.list_sub_items}href="#">
              <FaWhatsapp id={classes.wa} className={classes.share_icon} size="32px" />
            </a>
            <a className={classes.list_sub_items}href="#">
              <FaYoutube id={classes.yt} className={classes.share_icon} size="32px" />
            </a>
          </li>
          <li className={classes.foot_content}>
            <h4 className={classes.reachus_title}>Reach us</h4>
            <p className={classes.reachus_content}>
              91+ 9940291408
              <br />
              Lead integrated business Pvt.Ltd.
              <br />
              No.20,Appar st,Kamakodi nagar,
              <br />
              Valasaravakkam, Chenevi-87
              <br />
            </p>
          </li>
        </ul>
      </div>
      <p className={classes.foot_copyright}>
        <FaRegCopyright />
        Lead integrated business Pvt.Ltd.,All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
