import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
// initial state

const initialState = {
    caloriesLog: []
}

// create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
// Actions

    function deleteLog(id) {
        dispatch({
            type: 'DELETE_LOG',
            payload: id
        })
    }

    function addLog(calorieLog) {
        dispatch({
            type: 'ADD_LOG',
            payload: calorieLog
        })
    }
    
    return (<GlobalContext.Provider value={{
        caloriesLog: state.caloriesLog,
        deleteLog,
        addLog
    }}>
        {children}
    </GlobalContext.Provider>);
}