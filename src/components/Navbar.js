import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let logoStyle = {
    color: "#CC9933",
  };

  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  return (
    <>
      <div>
        <div className="alert alert-danger m-0 p-0" >
          <div className="marquee-text">
            <marquee>
              <p>
                Welcome To DevLoc! ......... Now a great banquet hall has
                opened in your city. I request all of you to please come once.
              </p>
            </marquee>
          </div>
        </div>

        <nav
          className="navbar navbar-expand-md bg-danger-subtle fixed border-bottom"
          data-bs-theme="dark"
        >
          <div className="container py-2">
            <Link className="navbar-brand d-md-none" to="/">
              <svg className="bi" width="24" height="24"></svg>
              <span style={logoStyle}>DevLok</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              // data-bs-toggle="offcanvas"
              // data-bs-target="#offcanvas"
              // aria-controls="#offcanvas"
              aria-label="Toggle navigation"
              onClick={() => setOffcanvasOpen(!offcanvasOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`offcanvas offcanvas-end${offcanvasOpen ? " show" : ""}`}
              style={{ backgroundColor: "#c76356" ,
              width: "50%", // Set the width of the offcanvas menu
              height: "100%",  }}
              tabIndex="-1"
              id="offcanvas"
              aria-labelledby="offcanvasLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">
                  DevLok
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={() => setOffcanvasOpen(false)}
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav flex-grow-1 justify-content-between">
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeOffcanvas}>
                      <img
                        src="/brand1.webp"
                        alt="logo"
                        style={{ height: 30, width: 30 }}
                      />
                      <svg className="bi" width="24" height="24"></svg>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeOffcanvas}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/services"
                      onClick={closeOffcanvas}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/gallary"
                      onClick={closeOffcanvas}
                    >
                      Gallary
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/about"
                      onClick={closeOffcanvas}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/visit"
                      onClick={closeOffcanvas}
                    >
                      Visit
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-primary"
                      to="/login"
                      onClick={closeOffcanvas}
                    >
                      LogIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeOffcanvas}>
                      <svg className="bi" width="24" height="24"></svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
