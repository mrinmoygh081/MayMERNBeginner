import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="container-fluid header-parent">
          <div className="row header-container">
            <div className="col">
              <div className="nav-left">
                <h3>Birupaksha Dey</h3>
              </div>
            </div>
            <div className="col-8 nav-right-container">
              <div className="nav-right">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="services.html" target="_blank">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="project.html" target="_blank">
                      Project
                    </a>
                  </li>
                  <li>
                    <a href="about.htm" target="_blank">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="blog.html" target="_blank">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" target="_blank">
                      Contact
                    </a>
                  </li>
                  <li className="nav-btn">Get Started</li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div className="mobile-menu-btn-div">
                <span className="mobile-menu-btn" id="menu">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Navbar for Mobile --> */}
      <div className="mobile-nav-container " id="side-nav">
        <div className="nav-top">
          <div className="logo">
            <h3>Birupaksha Dey</h3>
            <div className="nav-close-btn" id="close">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="contact-info-container">
            <div className="phn">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-info">
                <h5>Call Now</h5>
                <p>+91-7384690448</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-info">
                <h5>Send Email</h5>
                <p>help@gmail.com</p>
              </div>
            </div>
            <div className="timing">
              <div className="icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="contact-info">
                <h5>Mon-Sat 8:00 - 6:30</h5>
                <p>Sunday - CLOSED</p>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-button">
          <a href="">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
          </a>
          <a href="">
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
          </a>
          <a href="">
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </a>
          <a href="">
            <span>
              <i className="fa-brands fa-snapchat"></i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
