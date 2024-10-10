import CDown from "./CDown";
import React, { useEffect, useState, useRef } from "react";
import { CircleSlider } from "react-circle-slider";

function InputURL() {
  const [value, changeValue] = useState(20); // Minutes from slider
  const [timer, setTimer] = useState("00:20:00"); // Timer display state
  const [isActive, setIsActive] = useState(false); // To control start/stop of timer
  const Ref = useRef();

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
    const seconds = Math.floor((total / 1000) % 60);
    const minute = Math.floor((total / 1000 / 60) % 60);

    return [total, hour, minute, seconds];
  }

  function startTimer(deadline) {
    let [total, hour, minute, seconds] = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        (hour > 9 ? hour : "0" + hour) +
          ":" +
          (minute > 9 ? minute : "0" + minute) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(Ref.current); // Stop timer when it reaches 0
    }
  }

  function clearTimer(endTime) {
    if (Ref.current) clearInterval(Ref.current); // Clear any existing timer
    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);
    Ref.current = id;
  }

  function getDeadTime(minutes) {
    let deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + minutes);
    return deadline;
  }

  function Reset() {
    setIsActive(false); // Stop the timer
    setTimer("00:00:00"); // Reset display to 00:00:00
  }

  function Start() {
    setIsActive(true); // Start the timer
    clearTimer(getDeadTime(value)); // Use the value from the slider to set the timer
  }

  useEffect(() => {
    if (isActive) {
      clearTimer(getDeadTime(value)); // Restart timer when value changes while active
    }
  }, [value, isActive]);

  const handleSliderChange = (newValue) => {
    changeValue(newValue); // Update slider value
    if (isActive) {
      clearTimer(getDeadTime(newValue)); // Adjust the countdown time when the slider changes
    }
  };
  return (
    <div className="text-center">
      <h1 style={{ color: "#85ce14" }}>Start Focusing</h1>
      <div className="d-flex flex-row text-center">
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
        </div>
        <div className="col">
          <input
            type="text"
            className="border m-3 p-2"
            style={{ width: "80%", borderRadius: ".5rem", height: "2rem" }}
            placeholder="Enter website URL to focus"
          />
          <div className="d-grid gap-2 col-6 mx-auto">
          <div className="textContainer text-center p-2 col">
          <h4 className="tminute" >{value}</h4> 
          <h4 className="tminute" >{timer}</h4>
              <div className="minute p-2">MINUTES</div>
              <div className="d-flex justify-content-evenly align-items-center flex-column">
                <button
                  onClick={Reset}
                  type="button"
                  className="btn btn-success m-2"
                >
                  Restart
                </button>
              </div>
            </div>
            <button
              className="btn border"
              onClick={Start}
              style={{ backgroundColor: "#85ce14", color: "white" }}
            >
              Submit URL
            </button>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default InputURL;
