import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const NetCalories = () => {
  const {caloriesLog} = useContext(GlobalContext)
  return (
    <>
    <h4>Net Calories</h4>
    <h1 id='net-calories'>0.00kcal</h1>
    </>
  )
}

