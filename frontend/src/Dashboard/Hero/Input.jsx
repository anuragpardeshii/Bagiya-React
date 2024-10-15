import React, { useEffect, useState } from "react";
import { CircleSlider } from "react-circle-slider";

function InputURL() {
  const [value, setValue] = useState(60); // Initial time in minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      clearTimer(getDeadTime(value)); // Restart timer when value or isActive changes
    }
  }, [value, isActive]);

  const handleSliderChange = (newValue) => {
    setValue(newValue); // Update slider value
    if (isActive) {
      clearTimer(getDeadTime(newValue)); // Adjust the countdown time when the slider changes
    }
  };

  const clearTimer = (deadline) => {
    // Logic to clear/reset the timer and set a new deadline
    console.log("Timer cleared, new deadline:", deadline);
  };

  const getDeadTime = (minutes) => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + minutes);
    return time;
  };

  const Start = () => {
    setIsActive(true);
    // Logic to start the timer, e.g., preventing tab switching
    console.log("Timer started");
  };

  const Reset = () => {
    setIsActive(false);
    setValue(60); // Reset to default 60 minutes
    clearTimer(getDeadTime(60)); // Reset timer countdown
    console.log("Timer reset");
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
            placeholder="PLease enter of the website here"
          />
          <div className="d-grid gap-2 col-6 mx-auto">
            <div className="textContainer text-center p-2 col">
              <h4 className="tminute">{value}</h4>
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
              Start Focusing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputURL;