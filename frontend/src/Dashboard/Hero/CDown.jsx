import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function CDown(value) {
  const [url, setUrl] = useState('');
  const [isFocused, setIsFocused] = useState(true);
  const [isTimerActive, setIsTimerActive] = useState(false);
  
  // Track visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsFocused(false);
        alert('You cannot switch tabs! Get back to work!');
      } else {
        setIsFocused(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Fullscreen toggle
  const enableFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
  };

  const handleStartFocus = () => {
    const parsedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
    window.open(parsedUrl, '_blank', 'noopener,noreferrer');
    setIsTimerActive(true); // Start the timer
    enableFullscreen();
  };

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <h1>Focus Application</h1>
      <input
        type="text"
        placeholder="Enter website URL to focus"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleStartFocus}>Start Focus</button>

      {isTimerActive && (
        <CountdownCircleTimer
          isPlaying={isFocused} // Pauses when user switches tabs
          duration={value} // Total focus time (25 minutes)
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[value, 1000, 500, 0]} // Color transitions as time passes
          onComplete={() => {
            alert('Focus time completed!');
            setIsTimerActive(false); // Reset timer after completion
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
    </div>
  );
}

export default CDown;
