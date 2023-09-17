import React, {useState} from 'react'
import Day from './Day'
import { september, october } from './days'

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState('September');
  const months = {
    September: september,
    October: october
  }

  const changeMonth = (newMonth) => {
    setCurrentMonth(newMonth);
  }
  return (
    <div>
      <div className='month'>
        <button onClick={() => changeMonth('September')}><i className="fa-solid fa-caret-left"></i></button>
        <h1>{currentMonth}</h1>
        <button className='next' onClick={() => changeMonth('October')}><i className="fa-solid fa-caret-right"></i></button>
      </div>
    <div className='calendar'>
      
        {months[currentMonth].map((day) => (
          <Day key={day.day} day={day}/>
        ))}
    </div>
    </div>
  )
}

export default Calendar