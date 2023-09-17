import React, {useState} from 'react'
import Day from './Day'
import { september, october, november} from './days'

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState('September');
  const months = {
    September: september,
    October: october,
    November: november
  }

  const changeMonth = (newMonth) => {
    setCurrentMonth(newMonth);
  }

  const monthKeys = Object.keys(months);
  const currentIndex = monthKeys.indexOf(currentMonth);
  const hasNextMonth = currentIndex < monthKeys.length - 1;
  const hasPreviousMonth = currentIndex > 0;

  const backgroundClass = currentMonth === 'November' ? 'background-november' : 'background';

   return (
    // <div className='background'>
    <div className={backgroundClass}>
      <div className='month'>
        <button
          className={`next ${!hasPreviousMonth ? 'disabled' : ''}`}
          onClick={() => hasPreviousMonth && changeMonth(monthKeys[currentIndex - 1])}
          
        >
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <h1>{currentMonth}</h1>
        <button
          className={`next ${!hasNextMonth ? 'disabled' : ''}`}
          onClick={() => hasNextMonth && changeMonth(monthKeys[currentIndex + 1])}
        >
          <i className="fa-solid fa-caret-right"></i>
        </button>
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