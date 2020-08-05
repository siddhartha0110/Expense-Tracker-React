import React, { Fragment, useContext } from 'react'
import { globalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

    const { transactions } = useContext(globalContext);
    const displayTransactions = transactions === null ? (
        <ul id="list" className="list">
            {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction} />
            ))}

        </ul>) : <p>No Transactions to show</p>
    return (

        <Fragment>
            <h3>Transaction History</h3>
            {displayTransactions}
        </Fragment>
    )
}

export default TransactionList
