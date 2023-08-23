import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_desk">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="topbar_left">
                <p>Reliable Taxi Service & Transport Solutions!</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tobbar_itembar">
                <ul className="topbar_items">
                  <li>
                    <Link to={"/help"}>Help</Link>
                  </li>
                  <li>
                    <Link to={"/support"}>Support</Link>
                  </li>
                  <li>
                    <Link to={"/faq"}>FAQ</Link>
                  </li>
                </ul>
                <ul className="topbar_items">
                  <li>
                    <a href="https://facebook.com">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="header_left">
                <img src={require("../assets/images/logo.png")} alt="logo" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="header_right">
                <div className="header_info">
                  <div className="header_icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="header_details">
                    <p>Call Us Now</p>
                    <p>
                      <a href="tel:5267214392">5267-214-392</a>
                    </p>
                  </div>
                </div>
                <div className="header_info">
                  <div className="header_icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="header_details">
                    <p>Email Now</p>
                    <p>
                      <a href="mailto:Info.Ridek@Mail.Com">
                        Info.Ridek@Mail.Com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="header_info">
                  <div className="header_icon">
                    <i className="fa fa-map"></i>
                  </div>
                  <div className="header_details">
                    <p>Halk Street</p>
                    <p>New York, USA - 2386</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
