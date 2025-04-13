import React from 'react'
import Style from './nav.module.css'

function Navbar() {
  return (
    <div className={`bg-dark ${Style.navbar}`}>
      <h1 style={{textAlign:"center"}}>Your Expense Tracker</h1>
    </div>
  )
}

export default Navbar
