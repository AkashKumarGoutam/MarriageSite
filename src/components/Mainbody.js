import React from "react";
import { Link } from "react-router-dom";

export default function Mainbody() {
  let firstStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign:"center",
    marginTop:"60px"
  };
  let myStyle = {
    fontWeight: "bold",
    color: "#9e1d21",
    borderBottom:"1px solid black",
    padding:"16px",
    textAlign:"center"
    
  };
  return (
    <div>


      
<div>
<img
          src="./banner.webp"
          className="img-fluid imgg"
          alt="b"
          style={{ width: "100vw" }}
        />

        <div className="btn btn-primary" style={{margin:"60px 0 0 130px"}}><Link to="/" style={{color:"white" , textDecoration:"none"}}>Book Now</Link></div>

</div>

        
      <div className="message-box text-centers ">


        <h2 style={firstStyle}><i> Your Wedding Our Planning</i></h2>
        <h6 style={myStyle}>
          Discover everything you need to <span style={{ color: "orange" }}><u>plan</u></span> your big day !
        </h6>

<div className="container">
        <p className="lead" style={{fontWeight: "bold" , color:"#767676" , margin:"30px 0 80px 0", textAlign:"justify"}}>
        In our exquisite banquet hall, your dream wedding can transform into a magical reality. The venue exudes elegance and luxury, setting the stage for a truly memorable day. Our commitment to providing a top-notch experience ensures that every aspect of your wedding ceremony is handled with care and attention to detail.

From enchanting decor that will leave your guests in awe to a dedicated team that caters to your every need, we're here to create an unforgettable experience. Your love story will be celebrated in a setting where every moment is cherished, and your special day is made even more exceptional. Don't miss the opportunity to book your dream wedding at our banquet hall, where love and elegance come together to create the perfect backdrop for your unique love story. It's time to celebrate your journey of love with us, and we're here to make it extraordinary.
        </p>
        </div>
      </div>
    </div>
  );
}
