import React from "react";
import "./footer.css";
import Logo from "../imgs/logo2.png";

function Footer() {
  return (
    <>
      
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>Be Spoke Surprises Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About Be Spoke Surprises</p>
            <p>Sell products on Be Spoke Surprises</p>
            <p>Be Spoke Surprises Business Card</p>
            <p>Be Spoke Surprises and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on Be Spoke Surprises</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">Be Spoke Surprises Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>Be Spoke Surprises Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About Be Spoke Surprises</p>
              <p>Sell products on Be Spoke Surprises</p>
              <p>Be Spoke Surprises Business Card</p>
              <p>Be Spoke Surprises and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on Be Spoke Surprises</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">Be Spoke Surprises Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          
          <div className="dev-data">
            <p>&copy; 2023 | Developed by </p>
            <a
              className="dev-link"
              href="https://github.com/AAnishRam"
              target="_blank"
            >
              Anish Ram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
