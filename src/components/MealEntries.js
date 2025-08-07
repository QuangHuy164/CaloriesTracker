import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Meal } from './Meal';
export const MealEntries = () => {
  const {caloriesLog} = useContext(GlobalContext);
  return (
    <>
      <h3>Food and Activities Log</h3>
      <ul id='list' className='list'>
        {caloriesLog.map( caloriesLog => (<Meal key={caloriesLog.id} caloriesLog={caloriesLog} />) )}
       
      </ul>
    </>
  )
}
