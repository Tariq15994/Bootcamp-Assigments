import React from 'react';
import './App.css';
import { TransactionProvider } from './components/transContext';
import AddTransaction from './components/addTrans';
import { TransactionHistory } from './components/transHistory';
import Expense from './components/expense';


function App() {
  return (
   
    // <TransactionProvider>

    <TransactionProvider>
      <div className='header'>
      
        <h1 className='textcenter'>Expense Traker </h1>
        <Expense />
        <TransactionHistory />
        <AddTransaction />
        
      </div>
      </TransactionProvider>

    
  )
}

export default App;
