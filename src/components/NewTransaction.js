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
     fetch("http://localhost:3000/transactions", {
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
            <input type="date" name="date" onChange={handleOnChange} value={formData.date}  placeholder="Date"/>
            <input type="description" name="description" onChange={handleOnChange} value={formData.description}  placeholder="Description"/>
            <input type="category" name="category" onChange={handleOnChange} value={formData.category} placeholder="Category"/>
            <input type="number" name="amount" onChange={handleOnChange} value={formData.amount} placeholder="Amount"/>
            <button type="submit">Add transaction</button>
        </form>
  )

}


export default NewTransaction
