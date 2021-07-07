import { useContext } from 'react';
import {Transaction} from './delTrans';
import { TransactionContext } from './transContext';
import '../App.css'

export const TransactionHistory = () => {

    const { transactions } = useContext(TransactionContext);

    return (
        <div>
            <h2 className="history">Transcation History</h2>

            <hr className="hr" />

            <ul className="transaction-list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                )
                )}

            </ul>




        </div>
    )
}