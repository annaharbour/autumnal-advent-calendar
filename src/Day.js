import React, {useState} from 'react'
import Popup from './Popup';


// Passing day from Calendar where we're mapping through the days array
function Day({day}){
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //Event handler for click setting the card to flipped and setting the backside of the car to the image in the days object
  const flipCard = () => {
    setIsFlipped(!isFlipped);
    // event handler to automatically open the pop-up when the card is flipped
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  }

// destructuring date out of each of the day objects
  const {date, image} = day

  return (
    // Rendering the day
    <div>
    <div className={`day ${isFlipped? 'flipped' : ''}`} onClick={flipCard}>
      <div className='front'>
        <span className='date'>{date}</span>
      </div>
      <div className='back' style={{backgroundImage: `url(${image})`}}>
      </div>
    </div>
    {isPopupOpen && <Popup cardData={day} onClose={closePopup} />}

    </div>
  )
}

export default Day