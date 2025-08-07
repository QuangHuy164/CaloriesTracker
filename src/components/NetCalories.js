import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const NetCalories = () => {
  const {caloriesLog} = useContext(GlobalContext)
  const amounts = caloriesLog.map( calorieLog => calorieLog.amount)
  const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2)
  return (
    <>
    <h4>Net Calories</h4>
    <h1 id='net-calories'>{total}kcal</h1>
    </>
  )
}

