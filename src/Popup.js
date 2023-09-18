import React from 'react';

function Popup({ cardData, onClose }) {
  const { day, image, event, link} = cardData;


  return (
    <div className="popup">
      <div className="popup-content">

 <div className="popup-details">
        <button className="close-button" onClick={onClose}>
        <i className="fa-solid fa-x"></i>
        </button>
          <h2>{day}</h2>
          <p>
            {event}
            {link && <a href={link}  target="_blank" ><i className="fa-solid fa-up-right-from-square"></i></a>}
          </p>
        </div>
        <div className="popup-image" style={{ backgroundImage: `url(${image})` }}></div>

       
      </div>
    </div>
  );
}

export default Popup;
