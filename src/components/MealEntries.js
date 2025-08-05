import React from 'react'

export const MealEntries = () => {
  return (
    <>
      <h3>Food Log</h3>
      <ul id='list' className='list'>
        <li className='minus'>
          Beef <span>+250kcal</span><button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  )
}
