import React, { useState, useEffect } from 'react';
import Day from './Day';
import { september, october, november, december } from './days';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState('September');

  const months = {
    September: september,
    October: october,
    November: november,
    December: december
  };

  function getCurrentMonth() {
    const currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[currentDate.getMonth()];
  }

  useEffect(() => {
    setCurrentMonth(getCurrentMonth());
  }, []);

  // Setting new month when button is pressed
  const changeMonth = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  // Defining whether or not there is a previous or next month
  const monthKeys = Object.keys(months);
  const currentIndex = monthKeys.indexOf(currentMonth);
  const hasNextMonth = currentIndex < monthKeys.length - 1;
  const hasPreviousMonth = currentIndex > 0;

  // Conditionally set background class based on the current month
  let backgroundClass = ''; // Default background class
  let cardFront = ''; // Default card front class
  let weekColor = 'black';
  let monthColor = '';

  if(currentMonth ==='September' || currentMonth === 'October'){
    backgroundClass = 'background-september';
    cardFront = 'front-image';
  } else if (currentMonth === 'November') {
    backgroundClass = 'background-november'; // November background
    cardFront = 'front-image'; // Card front for November
  } else if (currentMonth === 'December') {
    backgroundClass = 'christmas-back'; // December background
    cardFront = 'present-card'; // Card front for December
    weekColor = 'weekColor';
    monthColor = 'month-color';
  }  

  // Group the days by day of the week
  const daysByWeekday = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  };

  // Setting date and weekday for each day
  months[currentMonth].forEach((day) => {
    const date = new Date(day.date);
    const weekday = date.toLocaleString('en-US', { weekday: 'long' });
    daysByWeekday[weekday].push(day);
  });

  // Define the order of days of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className={backgroundClass}>
      <div className='month'>
        {/* Prev Month Button */}
        <button
          className={`next ${!hasPreviousMonth ? 'disabled' : ''}`}
          onClick={() => hasPreviousMonth && changeMonth(monthKeys[currentIndex - 1])}
        >
          <i className={`${monthColor} fa-solid fa-caret-left`}></i>
        </button>
        {/* Current Month Header */}
        <h1 className={monthColor}>{currentMonth}</h1>
        {/* Next Month Button */}
        <button
          className={`next  ${!hasNextMonth ? 'disabled' : ''}`}
          onClick={() => hasNextMonth && changeMonth(monthKeys[currentIndex + 1])}
        >
          <i className={`${monthColor} fa-solid fa-caret-right`}></i>
        </button>
      </div>
      <div className='calendar'>
        {daysOfWeek.map((dayOfWeek) => (
          <div className='week' key={dayOfWeek}>
            <div className={`day-name ${weekColor}`}>
              {dayOfWeek.slice(0, 1)} {/* Display the first character */}
            </div>
            {months[currentMonth]
              .filter((day) => day.weekday === dayOfWeek)
              .map((day) => (
                <Day key={day.date} day={day} cardFront={cardFront}/>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
