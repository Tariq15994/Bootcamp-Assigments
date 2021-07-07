import {React, useContext} from 'react';
import { TransactionContext } from './transContext';


function Expense() {

    let { transactions } = useContext(TransactionContext);


    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount

        }
        return income;
    }
    const getExpense = () => {

        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense = expense + transactions[i].amount

        }
        return expense;
    }


    return (
        <div>
            <div className='balance-container'>
                <h3 className='heading textcenter'>BALANCE  <br />${getIncome() + getExpense()}</h3>
            </div>
            <div className='expense-container'>

                <h3 className={'heading income-color '}>INCOME
                    <h3 className="income-value">${getIncome()}  </h3>
                </h3>
                <hr className="line" />
                <h3 className={'heading expense-color'}>EXPENSE
                    <h3 className='expense-value'> ${getExpense()} </h3>
                </h3>



            </div>

        </div>
    )
}

export default Expense ;