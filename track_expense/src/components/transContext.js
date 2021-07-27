import { React, createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';
const initialTrans ={transactions : [
    
]
    }



export const TransactionContext = createContext(initialTrans);



export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTrans)

    function addTransaction(transObj) {
        dispatch({
            type: "ADD",
            payload: transObj,
        });

    }
    function delTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            delTransaction
        }}>
            {children}
        </TransactionContext.Provider>


    )
}