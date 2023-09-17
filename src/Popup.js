import React from 'react';

function Popup({ cardData, onClose }) {
  const { date, image, event } = cardData;

  return (
    <div className="popup">
      <div className="popup-content">

 <div className="popup-details">
        <button className="close-button" onClick={onClose}>
        <i className="fa-solid fa-x"></i>
        </button>
          <h2>{date}</h2>
          <p>{event}</p>
        </div>
        <div className="popup-image" style={{ backgroundImage: `url(${image})` }}></div>

       
      </div>
    </div>
  );
}

export default Popup;
