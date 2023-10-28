import React from "react";

export default function Footer() {
  let ancharStyle = {
    color: "#999",
    display: "block",
    textDecoration: "none",
  };

  let listStyle = {
    listStyleType: "none",
  };
  let footerStyle = {
    padding: "90px 0 80px !important",
    color: "#999",
    backgroundColor: "#393939",
  };
  let liStyle = {
    marginBottom: "10px",
    display: "block",
    width: "100%",
    borderBottom: "1px dashed rgba(255, 255, 255, 0.1)",
    paddingBottom: "10px",
  };

  return (
    <div>
      <footer className="footer  pt-5" style={footerStyle}>
        <div className="container">
          <div className="row ">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="widget clearfix m-4">
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  DevLoc
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1024.8311462082777!2d84.16347028672236!3d24.907731374535544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398dafedc17bdb2d%3A0x4d58839e984be1d2!2sGoutam%20house!5e1!3m2!1sen!2sin!4v1698247997736!5m2!1sen!2sin"
                  width="320"
                  height="200"
                  title="gg"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
                {/* <iframe style="border:0;width: -moz-available;height: 25vh;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJLR7nWrDBDDkRE9z2u5Hgsgo" allowfullscreen="" frameborder="0"></iframe> */}
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="widget clearfix">
                <div className="widget-title m-4">
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Quick Links
                  </h3>
                </div>

                <ul className="footer-links" style={listStyle}>
                  <li style={liStyle}>
                    <a style={ancharStyle} href="index.html">
                      Home <span className="icon icon-arrow-right2"></span>
                    </a>
                  </li>
                  <li style={liStyle}>
                    <a style={ancharStyle} href="call_for_paper.html">
                      Call for Paper{" "}
                      <span className="icon icon-arrow-right2"></span>
                    </a>
                  </li>
                  <li style={liStyle}>
                    <a style={ancharStyle} href="schedule.html">
                      Schedule <span className="icon icon-arrow-right2"></span>
                    </a>
                  </li>
                  <li style={liStyle}>
                    <a style={ancharStyle} href="registration.html">
                      Registration{" "}
                      <span className="icon icon-arrow-right2"></span>
                    </a>
                  </li>
                  <li style={liStyle}>
                    <a style={ancharStyle} href="events.html">
                      Event <span className="icon icon-arrow-right2"></span>
                    </a>
                  </li>
                  <li style={liStyle}>
                    <a style={ancharStyle} href="contact.html">
                      Contact <span className="icon icon-arrow-right2"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="footer-distributed widget clearfix">
                <div className="widget-title m-3">
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "25px",
                    }}
                  >
                    VENUE LOCATION
                  </h3>
                  <h5 style={{ color: "#ffffff", marginLeft: "25px" }}>
                    {" "}
                    Organization Name: DevLoc Family
                  </h5>
                  <address style={{ fontSize: "20px", marginLeft: "25px" }}>
                    Web Site: DevLocFamily@gmail.com <br />
                    visit us: DevLoc Banquet
                    <br /> Hall Near MAA MAIHAR DHARMKATA (Manaura Mod), Rohtas,
                    Bihar - 821307
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-light text-dark d-flex justify-content-lg-center">
          
          <p>
          Privacy Policy | Terms & Conditions | Safety & Security | Supplier
            Code Of Conduct<br/>
          </p>
          <p>© 2023 All Rights Reserved. ICP license: 1xxxxxx</p>
        </div>
      </footer>
    </div>
  );
}
