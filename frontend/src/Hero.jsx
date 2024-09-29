import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="row">
        <div className="col-5 text-center" style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column", padding: "5rem"}}>
          <img src="Media/images/Bagiya_logo.png" alt="logo" />
          <h1 style={{ color: "#366827", fontWeight: "700", fontSize: "3rem" }}>
            THE GREENEST WAY TO FOCUS!
          </h1>
        </div>
        <div className="col-7">
          <div className="waves">
            <img
              src="Media/images/waveRotated.svg"
              alt="planting"
              style={{ height: "100vh" }}
            />
          </div>
          <div>
            <img src="Media/images/bagiya.jpg" style={{ height: "100vh", objectFit: "cover", width: "100%"}} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;