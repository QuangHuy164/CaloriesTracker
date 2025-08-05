import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
// initial state

const initialState = {
    caloriesLog: [
        {id: 1, text: 'Breakfast', amount: 300},
        {id: 2, text: 'Running', duration: 30, amount: -334 },
        {id: 3, text: 'Lunch', amount: 595},
        {id: 4, text: 'Push ups', duration: 30, amount: -110},
        {id: 5, text: 'Pre-workout', amount: 150},
        {id: 6, text: 'Triceps Push down', duration: 30, amount:-112},
        {id: 7, text: 'Post Workout', amount: 150},
        {id: 8, text: 'Dinner', amount: 542 }
    ]
}

// create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (<GlobalContext.Provider value={{
        caloriesLog: state.caloriesLog
    }}>
        {children}
    </GlobalContext.Provider>);
}