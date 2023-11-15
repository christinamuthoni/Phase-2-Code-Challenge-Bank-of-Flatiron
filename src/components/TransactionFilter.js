import React, { useState, useEffect } from 'react';
import NewTransaction from './NewTransaction'


function TransactionFilter() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transactions from your API endpoint
    fetch('https://my-json-server.typicode.com/christinamuthoni/Phase-2-Code-Challenge-Bank-of-Flatiron/transactions')
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
      className='mt-5 border-solid border-2 border-gray-300 ...	block flex-1 bg-gray-100 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  w-full'
        type='text'
        placeholder='Search transactions by description...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      < NewTransaction  />
      <table className='mt-7 border-solid border-2 border-black w-full'>
        <thead className='bg-blue-200'>
          <tr>
            <th className='border-solid border-2 border-black'>Date</th>
            <th className='border-solid border-2 border-black'>Description</th>
            <th className='border-solid border-2 border-black'>Category</th>
            <th className='border-solid border-2 border-black'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr className='border-solid border-2 border-black' key={transaction.id}>
              <td className='border-solid border-2 border-black'>{transaction.date}</td>
              <td className='border-solid border-2 border-black'>{transaction.description}</td>
              <td className='border-solid border-2 border-black'>{transaction.category}</td>
              <td className='border-solid border-2 border-black'>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionFilter;
