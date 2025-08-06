import React from 'react'

export const Meal = ({caloriesLog}) => {
    const sign = caloriesLog.amount < 0 ? '-' : '+';
  return (
    <li className={caloriesLog.amount < 0 ? 'minus' : 'plus'}>
          {caloriesLog.text} <span>{sign}{Math.abs(caloriesLog.amount)}kcal</span><button className='delete-btn'>x</button>
        </li>
  )
}
