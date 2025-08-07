import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const CaloriesInTake = () => {
  const {caloriesLog} = useContext(GlobalContext)
  const amounts = caloriesLog.map(calorieLog => calorieLog.amount)

  const intake = amounts.filter(item => item > 0)
  .reduce((acc, item) => (acc += item),0).toFixed(2)

  const meal = (
    amounts.filter(item => item < 0)
  .reduce((acc, item) => (acc += item),0) * -1).toFixed(2)
  return (
    <div className="cal-in-container">
        <div>
          <h4>Calories InTake</h4>
          <p id="calories-plus" className="calories plus">{intake}kcal</p>
        </div>
        <div>
          <h4>Calories Burned</h4>
          <p id="calories-minus" className="calories minus">{meal}kcal</p>
        </div>
      </div>
  )
}
