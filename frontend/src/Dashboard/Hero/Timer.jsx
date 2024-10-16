import React, { useState, useRef } from "react";
import { CircleSlider } from "react-circle-slider";
import Countdown from "react-countdown";
import QuitConfirmationPopup from "./QuitConfirmationPopup"; // Popup component

function Timer() {
  const [value, setValue] = useState(60); // Initial time in minutes
  const [timeLeft, setTimeLeft] = useState(value * 60000); // Track remaining time in ms
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle the popup
  const [isPaused, setIsPaused] = useState(false); // Paused state
  const [startCountdown, setStartCountdown] = useState(false); // Timer start state
  const countdownRef = useRef(null); // Reference to countdown

  // Handle slider value change
  const handleSliderChange = (newValue) => {
    setValue(newValue);
    setTimeLeft(newValue * 60000); // Update the time left in milliseconds
  };

  // Renderer for countdown
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time is up!</span>;
    } else {
      return (
        <span>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      );
    }
  };

  // Function to start the countdown
  const startTimer = () => {
    setStartCountdown(true); // Start the countdown
    setIsPaused(false); // Ensure timer is not paused
  };

  // Function to reset the countdown
  const resetTimer = () => {
    setStartCountdown(false); // Stop countdown
    setIsPaused(false); // Ensure the countdown isn't paused
    setValue(60); // Reset slider value to 60 minutes
    setTimeLeft(60 * 60000); // Reset time left to initial value
  };

  // Function to stop the countdown after confirmation
  const handleConfirmQuit = () => {
    resetTimer(); // Reset countdown and stop
    setIsModalOpen(false); // Close popup
  };

  // Function to close the popup and keep the timer running
  const handleKeepFocusing = () => {
    setIsPaused(false); // Resume the countdown
    setIsModalOpen(false); // Close popup
  };

  // Open the confirmation popup
  const handleGiveUpClick = () => {
    setIsPaused(true); // Pause the countdown
    setIsModalOpen(true); // Open popup
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
        {!startCountdown ? (
          <h2 className="minute" style={{ color: "#85ce14", fontSize: "3rem" }}>
            {value}
            <div className="minute p-2">
              <h4 style={{ fontSize: "1.2rem" }}> MINUTES </h4>
            </div>
          </h2>
        ) : (
          <h3 className="minute" style={{ color: "#85ce14", fontSize: "3rem" }}>
            <Countdown
              ref={countdownRef} // Reference to the countdown
              date={Date.now() + timeLeft} // Use saved timeLeft to continue countdown
              autoStart={!isPaused} // Only start if not paused
              renderer={renderer}
              onComplete={resetTimer} // Reset timer when complete
            />
          </h3>
        )}
        <div className="d-flex justify-content-evenly align-items-center flex-column">
          {!startCountdown ? (
            <button
              style={{ backgroundColor: "#85ce14", color: "white", width: "8rem" }}
              onClick={startTimer}
              type="button"
              className="btn m-2"
            >
              Start
            </button>
          ) : (
            <button
              style={{ backgroundColor: "#85ce14", color: "white", width: "8rem" }}
              onClick={handleGiveUpClick} // Show the confirmation popup
              type="button"
              className="btn m-2"
            >
              Give Up!
            </button>
          )}
        </div>
      </div>

      {/* Render the popup if isModalOpen is true */}
      {isModalOpen && (
        <QuitConfirmationPopup
          onConfirmQuit={handleConfirmQuit} // Stop the timer
          onKeepFocusing={handleKeepFocusing} // Close popup and continue
        />
      )}
    </div>
  );
}

export default Timer;
