import React from 'react'
import Day from './Day'
import { days } from './days'

function Calendar() {
  return (
    <div className='calendar'>
        {/* mapping through the days array*/}
        {days.map((day) => (
            <Day key={day.day} day={day}/>
        ))}
    </div>
  )
}

export default Calendar