import React, { useState, useEffect } from 'react'
//import runserver from "./api/transactions"
//runserver()

function TransactionTable() {
 const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      // Fetch transactions from your API endpoint
      fetch("./api/db.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      
        .then((data) => setTransactions(data.transactions))
        .catch((error) => console.error('Error fetching transactions:', error));
    }, []); // The empty dependency array ensures the effect runs only once on component mount

/*if (!Array.isArray()){
    console.error('Error:transactions is not an array');
    return null;
}
*/
  return (
    <div className='TransactionTable'>
        <table>
          <thead>
           <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
          ))}
          </tbody>
        </table>
    </div>
  )
  
}

export default TransactionTable