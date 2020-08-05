import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Store or Global State
const initialState = {
    transactions: [

    ]
}

//Create Context
export const globalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(tID) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: tID
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <globalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </globalContext.Provider>
    )
}
