import React from 'react'
import logo from './pic/logo-removebg-preview-new.png'
import {Link} from 'react-router-dom'

function Navbar() {
  function handleclick(){
    alert("Your Already Login")
  }
  return (
      <div className='navbar'>
 <img className="shoe" src={logo} alt="logo" />
        <div className='btn-container'>
          <button className='btn btn1' onClick={handleclick}>Login</button>
            <button className='btn btn2'>Signup</button>
<Link to="/product/cart"><button className='btn' >Cart</button></Link>
        </div>
    </div>
  )
}

export default Navbar