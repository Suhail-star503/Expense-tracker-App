import React from 'react'
import Style from './ExpenseList.module.css'

function ExpenseList(props) {
  
  return (
    <div style={{border:"1px solid white",padding:"5px",marginTop:"40px",marginLeft:"-20px",paddingBottom:"80px"}}>
      <h3 style={{color:'white',marginTop:"20px",marginBottom:"10px"}}>Transactions</h3>
      <ul>
        {props.text.length === 0 ? <div style={{marginTop:"50px",color:"darkorange",textAlign:"center",fontSize:"20px"}}>No Transactions available yet </div>: props.text.map((text,index) => {
          return <li key={index}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px", backgroundColor:text.value > 0 ? "green" : "red", color: "white", borderRadius: "10px", marginTop: '10px' }}>
              <span style={{ width: "78%", display:"flex" }}><h6 >{text.text} </h6></span>
              <span><h6>${text.value}</h6></span>
              <button className='btn' onClick={()=>props.deleteList(index)} style={{color:"white",fontSize:"22px"}}><i className="fa-solid fa-trash"></i></button>
              
            </div>
          </li>
        })}





      </ul>
      
    </div>
  )
}

export default ExpenseList


