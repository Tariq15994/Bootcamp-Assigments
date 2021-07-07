import React, { useContext } from 'react'

// Import the Global State
import { TransactionContext } from './transContext';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(TransactionContext);

    return (
        <li>
            {transaction.desc}
            <span>{transaction.amount}</span>
            <button className="delete-btn"
                    onClick={() => delTransaction(transaction.id)}>
                X
            </button>
            <div className= "empty"></div>
        </li>
    )
}