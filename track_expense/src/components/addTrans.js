import {React , useContext , useState} from 'react';
import { TransactionContext } from './transContext';
// import { TransactionHistory } from './transHistory';
import '../App.css';






function AddTransaction(){
    let { addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState();


    



    const handleAddition = (event) => {

        
        event.preventDefault()
        if (newAmount === 0){
            return (alert("Please use correct Value"))
        };
        

        addTransaction({
            id : new Date().getTime(),
            amount: Number(newAmount),
            desc: newDesc
        })
        setDesc('');
        setAmount('');

    }
                return(
                    <div>
                <h3 className="history">Add Transaction</h3>
                <hr className='hr' />



                <form className='transaction-form' onSubmit={handleAddition}>
                    <label className='desc'>
                        Enter Discription
                        
                        <input type='text' onChange={(ev) => setDesc(ev.target.value)} required value={newDesc} placeholder='Description'/>



                    </label>
                    
                    <label className='cash'>
                        Enter Amount
                        <br />
                        <input type='number' onChange={(ev) => setAmount(ev.target.value)} required value={newAmount} placeholder='00'/>



                    </label>
                    <br />

                    <input type='submit' value='Add Transaction' className='submit'/>
                </form>
            </div>)
}

export default AddTransaction;