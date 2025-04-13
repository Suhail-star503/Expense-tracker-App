import React from 'react'
import Style from './ExpenseInfo.module.css'
import ExpenseList from '../ExpenseList/ExpenseList'

function ExpenseInfo(props) {
  
  
  const reset=()=>{
    props.setamount(0)
    props.settext('')
    props.setrecent(0)
  }
  return (
    <div className={Style.infocontainer}>
      <h3 style={{color:"white",marginBottom:"20px"}}>Totall balance : {props.amount <0 ?<span style={{color:"red"}}>${props.amount}</span>:<span style={{color:"green"}}>${props.amount}</span>}</h3>
      <div className={Style.status}>
       <h4 style={{color:"white"}}>Credited : <span style={{color:"green"}}>$</span>{props.recent>0?<span style={{color:"green"}}>{props.recent}</span>:0}</h4>
       <h4 style={{color:"white"}}>Debited : <span style={{color:"red"}}>$</span>{props.recent<0?<span style={{color:"red"}}>{props.recent}</span>:0}</h4>
      </div>
      
      <div>
        
        <div>
            <ExpenseList text={props.text} recent={props.recent} deleteList={props.deleteList}/>
            {props.text.length===0?null:<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
            <button className='btn' style={{backgroundColor:"darkorange",color:"white",width:"200px"}} onClick={reset}>Reset tracker</button>
            </div>}
            
        </div>

      </div>
    </div>
  )
}

export default ExpenseInfo
