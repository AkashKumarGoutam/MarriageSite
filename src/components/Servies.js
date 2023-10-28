import React from "react";
import { Link } from "react-router-dom";

export default function Servies() {
  
  return (
    <>
      <div className="text-center">
        <h2
          style={{
            margin: "88px 0 10px 0",
            fontSize: "32px",
            lineHeight: "22px",
            fontFamily: "Abhaya Libre",
            fontWeight: "700",
            color: "#896633",
          }}
        >
          SERVICE
        </h2>
        <img src="./heading-bottom-line.webp" alt="hiu" />
      </div>

      <div className="container d-sm-flex justify-content-around ">
        <div className="card m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h4 style={{ color: "#896633" }}>Wedding Ceremony</h4>
            <p className="card-text">
              "Transform your dream wedding into a reality at our exquisite
              banquet hall. With a perfect blend of elegance and luxury, our
              venue offers a magical setting for your special day. From
              enchanting decor to top-notch services, we're here to make your
              wedding ceremony unforgettable. Celebrate your love story with us,
              where every moment is cherished. Book your dream wedding at our
              banquet hall today!"
            </p><br/><br/><br/>
            <Link to="/booking" className="btn btn-primary">
              Book now
            </Link>
          </div>
        </div>

        <div className="card m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h4 style={{ color: "#896633" }}>Birthday Ceremony</h4>
            <p className="card-text">
              "Celebrate life's milestones with us! Our banquet hall is the
              perfect venue for unforgettable birthday ceremonies." "From themed
              decorations to delicious catering, we offer a one-stop solution
              for your special day." "Our spacious and elegantly decorated hall
              provides a welcoming atmosphere for your family and friends." "Let
              our experienced team take care of every detail, ensuring your
              birthday celebration is a cherished memory." "Book our banquet
              hall and make your birthday ceremony an event to remember with
              us!"
            </p>
            <Link to="/booking" className="btn btn-primary">
              Book now
            </Link>
          </div>
        </div>

        <div className="card m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h4 style={{ color: "#896633" }}>Other Occassion</h4>
            <p className="card-text">
              "Our versatile banquet hall is the perfect venue for hosting
              weddings, birthdays, and a variety of other ceremonies." "From
              elegant weddings to joyous birthdays and all types of ceremonies
              in between, our banquet hall can cater to all your event needs."
              "With our banquet hall, you can celebrate weddings, birthdays, and
              other special ceremonies in a welcoming and stylish environment."
            </p><br/><br/><br/><br/>
            <Link to="/booking" className="btn btn-primary">
              Book now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
