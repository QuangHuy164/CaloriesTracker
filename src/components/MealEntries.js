import React from 'react'

export const MealEntries = () => {
  return (
    <>
      <h3>Food Log</h3>
      <ul id='list' class='list'>
        <li className='minus'>
          Beef <span>+250kcal</span><button class='delete-btn'>x</button>
        </li>
      </ul>
    </>
  )
}
