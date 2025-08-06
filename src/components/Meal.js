import React from 'react'

export const Meal = ({caloriesLog}) => {
  return (
    <li className='minus'>
          {caloriesLog.text} <span>-250kcal</span><button className='delete-btn'>x</button>
        </li>
  )
}
