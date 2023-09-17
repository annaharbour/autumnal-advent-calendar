import React, {useState} from 'react'


// Passing day from Calendar where we're mapping through the days array
function Day({day}){
  const [isFlipped, setIsFlipped] = useState(false);

  
  //Event handler for click setting the card to flipped and setting the backside of the car to the image in the days object
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

// destructuring date out of each of the day objects
  const {date, image} = day

  return (
    // Rendering the day
    <div className={`day ${isFlipped? 'flipped' : ''}`} onClick={flipCard}>
      <div className='front'>
        <span className='date'>{date}</span>
      </div>
      <div className='back' style={{backgroundImage: `url(${image})`}}>
        
      </div>
    </div>
  )
}

export default Day