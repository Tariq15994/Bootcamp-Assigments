import React from 'react';
import './App.css';
import { TransactionProvider } from './components/transContext';
import AddTransaction from './components/addTrans';
import { TransactionHistory } from './components/transHistory';
import Expense from './components/expense';


function App() {
  return (
    // <dic className='header'>
    <TransactionProvider>

      {/* <Header> */}
      {/* <Expense />
      <TransactionHistory />
      <AddTransaction /> */}
      {/* </Header> */}

      <div className='header'>
        <h1 className='textcenter'>Expense Traker </h1>
        <Expense />
        <TransactionHistory />
        <AddTransaction />
      </div>



    </TransactionProvider>
    // </dic>
  );
}

export default App;
