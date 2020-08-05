import React, { Fragment, useState, useContext } from 'react';
import { globalContext } from '../context/GlobalState';


const NewTransaction = () => {
    const { addTransaction } = useContext(globalContext);
    const [mode, setMode] = useState('');
    const [amount, setAmount] = useState(0);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            mode,
            amount: +amount
        }
        console.log(newTransaction)
        addTransaction(newTransaction);
        setMode('')
        setAmount(0)
    }
    return (
        <Fragment>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Payment Mode</label>
                    <input type="text" name="text" placeholder="Enter Mode"
                        value={mode} onChange={(e) => { setMode(e.target.value) }} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (positive-income, negative-expense) </label>
                    <input type="number" name="amount" placeholder="Enter amount..."
                        value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                </div>
                <button className="btn" >Add Transaction</button>
            </form>
        </Fragment>
    )
}

export default NewTransaction;
