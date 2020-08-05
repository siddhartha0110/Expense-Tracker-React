import React, { Fragment, useContext } from 'react'
import { globalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(globalContext);

    const price = transactions.map(transaction => transaction.amount);
    const balance = price.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <Fragment>
            <h4>Current Balance:</h4>
            <h1 id="balance">₹{balance}</h1>
        </Fragment>
    )
}

export default Balance
