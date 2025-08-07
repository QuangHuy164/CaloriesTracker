import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const Meal = ({caloriesLog}) => {
    const {deleteLog} = useContext(GlobalContext)
    const sign = caloriesLog.amount < 0 ? '-' : '+';
  return (
    <li className={caloriesLog.amount < 0 ? 'minus' : 'plus'}>
          {caloriesLog.text} <span>{sign}{Math.abs(caloriesLog.amount)}kcal</span><button onClick={()=> deleteLog(caloriesLog.id)} className='delete-btn'>x</button>
        </li>
  )
}
