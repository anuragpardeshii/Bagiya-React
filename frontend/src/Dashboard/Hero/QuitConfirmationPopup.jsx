import React from 'react';

function QuitConfirmationPopup({ onConfirmQuit, onKeepFocusing }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content" >
        <h2>Are You Sure?</h2>
        <img src="Media/images/progress/progress8.png" className='mb-4' style={{width: "15rem"}} alt="" />
        <p style={{fontSize: ".9rem"}}>
          If you quit now, you won't earn any coins, and the plant you were growing will eventually die. 
          Keep going and help it thrive!
        </p>
        <div className='d-flex justify-content-evenly'>
          <button className='border p-2 m-1' onClick={onKeepFocusing} style={{backgroundColor: "#83cc14", borderRadius: ".3rem", color: "white"}}>Keep Focusing</button>
          <button
          className='border p-2 m-1'
            onClick={onConfirmQuit}
            style={{backgroundColor: "#EE4B2B", borderRadius: ".3rem", color: "white"}}
          >
            Confirm Quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuitConfirmationPopup;
