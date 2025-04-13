import React from 'react'
import Navbar from './components/Navbar/nav'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseInfo from './components/ExpenseInfo/ExpenseInfo'
import { useState } from 'react'
function App() {
  const[amount,setamount]=useState(0);
  const[recent,setrecent]=useState(0);
  const[text,settext]=useState([]);

  

  const deleteList = (index) => {
    let itemToDelete = text.find((item, idx) => idx === index); // Find the item to delete based on its index
    if (itemToDelete && itemToDelete.value) { // Ensure the item and its value exist
      setamount((prev) => prev - itemToDelete.value); // Deduct the value
    }
  
    let newList = text.filter((_, idx) => idx !== index); // Create a new list without the item
    settext(newList); // Update the state
  };

  return (
    <div style={{backgroundColor: 'black',minHeight:"100vh",paddingBottom:"50px"}}>
      <Navbar/>
      <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-lg-6" style={{display:"flex"}}><ExpenseForm setamount={setamount} setrecent={setrecent} settext={settext}/></div>
            <div className="col-12 col-lg-6" ><ExpenseInfo amount={amount} recent={recent} text={text} setamount={setamount} setrecent={setrecent} settext={settext} deleteList={deleteList}/></div>
        </div>
      </div>
    </div>
  )
}

export default App


