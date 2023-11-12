import React from 'react'
// import TransactionTable from './components/TransactionTable'
// import NewTransaction from './components/NewTransaction'
import TransactionFilter from './components/TransactionFilter';
import NavBar from './components/NavBar';

function App() {
    return (
    <div className='App container mx-auto bg-gray-50'>

     < NavBar />
      < TransactionFilter />
       {/* < NewTransaction  /> */}
      {/* < TransactionTable/> */}
     
    </div>
  )
}
export default App