import React from "react";

export default function Visit() {
  return (
    <>
      <div className="container d-sm-flex justify-content-around  ">
        <div>
          <img
            src="./aboutpic2.webp"
            width={300}
            alt="ajaj"
            style={{ marginTop: "80px" }}
          />
        </div>
        <div className=" p-4">
          <div className="text-center">
            <h2
              style={{
                fontSize: "32px",
                lineHeight: "22px",
                fontFamily: "Abhaya Libre",
                fontWeight: "700",
                color: "#896633",
              }}
            >
              VISIT US
            </h2>
            <img src="./heading-bottom-line.webp" alt="jbj" />
          </div>

          <p
            className="lead"
            style={{
              fontWeight: "bold",
              color: "#767676",
              margin: "30px 0 80px 0",
              textAlign: "justify",
            }}
          >
            City : Dehri On Sone<br/> 
            Address: Near Maa Maihar Dharmkata , opposite Manaura Mod <br/>  Rohtas Bihar <br/> Pin-code : 821305 . 
            {/* In our exquisite banquet hall, your dream wedding can transform into
            a magical reality. The venue exudes elegance and luxury, setting the
            stage for a truly memorable day. Our commitment to providing a
            top-notch experience ensures that every aspect of your wedding
            ceremony is handled with care and attention to detail. From
            enchanting decor that will leave your guests in awe to a dedicated
            team that caters to your every need, we're here to create an
            unforgettable experience. Your love story will be celebrated in a
            setting where every moment is cherished, and your special day is
            made even more exceptional. Don't miss the opportunity to book your
            dream wedding at our banquet hall, where love and elegance come
            together to create the perfect backdrop for your unique love story.
            It's time to celebrate your journey of love with us, and we're here
            to make it extraordinary. */}
          </p>
        </div>
      </div>
    </>
  );
}
