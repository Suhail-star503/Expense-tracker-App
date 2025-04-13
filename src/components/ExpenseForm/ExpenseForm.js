import React from 'react'
import Style from './ExpenseForm.module.css'
import { toast } from 'react-toastify';

function ExpenseForm(props) {

  const handlesubmit = (e) => {
    e.preventDefault();
    let inputValue = Number(e.target[1].value); 
    let textValue=e.target[0].value
    if (textValue.length > 40) {
      toast.error('Text should not be greater than 40 charactors', {
        position: "top-center",
        theme: "dark",
    });
      return; // Exit the function early
    }
  
  
    props.setrecent(inputValue);
    props.settext((prevText) => [...prevText, {value:inputValue,text:textValue}]);

    props.setamount((prev) => {
      
      return prev + inputValue; 
    });
    if(inputValue>0){
      toast.success('Wuhoo, balance increased successfully', {
        position: "top-center",
        theme: "dark",
    });
    
    }
    else{
      toast.warning('Balance decreased, limit your expenses', {
        position: "top-center",
        theme: "dark",
    });
    }
    e.target[0].value=''
    e.target[1].value=''


  };
  return (
    <div className={Style.customcard}>
      <h2 style={{ color: "white" }} className='mt-5 mb-5'>Add your expense here</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}>Text</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First add then expense' required />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "white" }}>Amount</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder='+ for add , - for expense' required />
        </div>

        <button type="submit" className="btn" style={{ backgroundColor: "darkorange", color: "white" }}>Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm
