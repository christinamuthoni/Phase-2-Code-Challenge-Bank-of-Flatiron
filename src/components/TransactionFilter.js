import React, { useState, useEffect } from 'react';
import NewTransaction from './NewTransaction'


function TransactionFilter() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transactions from your API endpoint
    fetch('http://localhost:3000/transactions')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
        // console.log(data)
      })
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log('Filtered Transactions:', filteredTransactions);


  return (
    <div className='TransactionTable'>
      <input
        type='text'
        placeholder='Search transactions by description...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      < NewTransaction  />
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
          {filteredTransactions.map((transaction) => (
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
  );
}

export default TransactionFilter;
