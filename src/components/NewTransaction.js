import React, { useState} from 'react'

function NewTransaction({onAddTransaction}) {
    //const [date, setDate] = useState("");
    //const [description, setDescription] = useState("");
    //const [category, setcategory] = useState("");
    //const [Amount, setAmount] = useState("");
    
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    });

    function clearInputs(){
      window. location. reload(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        /*const formData = {transactions: { 
            date: date,
            description: description, 
            category: category,
            amount: amount,
        } */
        

     // persist transactions on server
     fetch(`https://my-json-server.typicode.com/christinamuthoni/Phase-2-Code-Challenge-Bank-of-Flatiron/transactions`, {
      // http://localhost:3000/transactions
       method: "POST",
       headers: {
        "Content-Type": "application/json",
        },
       body: JSON.stringify(formData),
    })
        .then(r => r.json())
        .then((data) => {

            onAddTransaction(data.transactions); 

            setFormData({
                date: "",
                description: "",
                category: "",
                amount: "",
            });
        })    
      .catch((error) => console.error('Error adding transaction:', error));
      {clearInputs()}
    }


            
            //(data.formData))
    // then use onAddTodo to add todo to state
    
    /*function addTransaction(newTransaction) {
        const updatedTransaction = [...transactions, newTransactions]
        setTransaction(updatedTransactions);
      }
      console.log(transactions) 
    }*/
    const handleOnChange = (event)=> {
      setFormData(
             {
                 ...formData,
                 [event.target.name]: event.target.value,
             }
        )
 
 
     }

  return ( 
    <form onSubmit={handleSubmit}>
            <h2>Add Transactions</h2>
            <div className='grid-rows-2	'>
              <div className='columns-4 mt-5'>
                <div>
                <input className='ml-3 border-solid border-2 border-gray-300 ...	block h-8 bg-gray-100 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400' type="date" name="date" onChange={handleOnChange} value={formData.date}  placeholder="Date"/>
                </div>
                <div>
                <input className='ml-3 border-solid border-2 border-gray-300 ...	block h-8 bg-gray-100 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400' type="description" name="description" onChange={handleOnChange} value={formData.description}  placeholder="Description"/>
                </div>
                <div>
                <input className='ml-3 border-solid border-2 border-gray-300 ...	block h-8 bg-gray-100 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400' type="category" name="category" onChange={handleOnChange} value={formData.category} placeholder="Category"/>
                </div>
                <div>
                <input className='ml-3 border-solid border-2 border-gray-300 ...	block h-8 bg-gray-100 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400' type="number" name="amount" onChange={handleOnChange} value={formData.amount} placeholder="Amount"/>
                </div>
              </div>
              <div className='relative flex h-16 items-center justify-center'>
              <button type="submit" className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-">Add transaction</button>
              </div>
            </div>
           
           
            
            
           
        </form>
  )

}


export default NewTransaction
