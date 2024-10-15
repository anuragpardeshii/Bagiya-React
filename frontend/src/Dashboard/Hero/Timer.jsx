import React, { useState } from "react";
import { CircleSlider } from "react-circle-slider";
import Countdown from "react-countdown"; // Ensure this is imported

function Timer() {
  const [value, setValue] = useState(60); // Initial time in minutes
  const [startCountdown, setStartCountdown] = useState(false);
  const [key, setKey] = useState(0); // Key to reset the countdown

  // Handle slider value change
  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  
  // Renderer for countdown
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time is up!</span>;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  // Function to start the countdown
  const Start = () => {
    setStartCountdown(true);
  };

  // Function to reset the countdown
  const Reset = () => {
    setKey((prevKey) => prevKey + 1); // Change key to reset countdown
    setStartCountdown(false); // Stop countdown
    setValue(60); // Reset slider value to 60 minutes
  };

  return (
    <div className="d-flex align-items-center p-4">
      <div className="" style={{ marginRight: "-14rem" }}>
        <img
          src="Media/images/progress/cropped-image1.png"
          style={{
            width: "12.4rem",
            marginLeft: "1.6rem",
            top: "0",
            zIndex: "0",
            borderRadius: "20rem",
          }}
          alt=""
        />
      </div>
      <CircleSlider
        className="col"
        style={{ zIndex: "1000" }}
        value={value}
        stepSize={1}
        onChange={handleSliderChange}
        size={250}
        max={120} // Maximum 120 minutes
        gradientColorFrom="#85ce14"
        gradientColorTo="#A2D240"
        knobRadius={10}
        circleWidth={20}
      />
      <div className="textContainer text-center p-2 col">
        {/* Conditionally render the value only when the countdown has not started */}
        {!startCountdown && (
          <h2 className="minute" style={{ color: "#85ce14", fontSize: "3rem" }}>
            {value}
            <div className="minute p-2" ><h4 style={{fontSize: "1.2rem"}}> MINUTES </h4> </div>
          </h2>
        )}
        <h3 className="minute" style={{ color: "#85ce14", fontSize: "3rem" }}>
          {startCountdown && (
            <Countdown
              key={key} // Use key to reset countdown
              date={Date.now() + value * 60000} // Convert minutes to milliseconds
              renderer={renderer}
            />
          )}
        </h3>
        <div className="d-flex justify-content-evenly align-items-center flex-column">
        {!startCountdown && (
          <button style={{backgroundColor: "#85ce14", color: "white", width: "8rem"}} onClick={Start} type="button" className="btn m-2">
            Start
          </button>
        )}
        {startCountdown && (
          <button style={{backgroundColor: "#85ce14", color: "white", width: "8rem"}} onClick={Reset} type="button" className="btn m-2">
            Give Up!
          </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timer;
