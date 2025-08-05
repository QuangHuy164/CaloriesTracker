import React from 'react'

export const CaloriesInTake = () => {
  return (
    <div className="cal-in-container">
        <div>
          <h4>Calories InTake</h4>
          <p id="calories-plus" className="calories plus">+0.00kcal</p>
        </div>
        <div>
          <h4>Calories Burned</h4>
          <p id="calories-minus" className="calories minus">-0.00kcal</p>
        </div>
      </div>
  )
}
