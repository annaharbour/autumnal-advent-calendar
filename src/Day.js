import React from 'react'

// Passing day from Calendar where we're mapping through the days array
function Day({day}){
// destructuring date out of each of the day objects
  const {date} = day

  return (
    // Rendering the day
    <div className='day'>Day {date}</div>
  )
}

export default Day