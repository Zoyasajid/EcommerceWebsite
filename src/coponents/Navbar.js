import React from 'react'
import logo from './pic/logo-removebg-preview-new.png'

function Navbar() {
  return (
    <div className='navbar'>
 <img className="shoe" src={logo} alt="logo" />
        <div className='btn-container'>
            <button className='btn btn1'>Login</button>
            <button className='btn btn2'>Signup</button>

        </div>
    </div>
  )
}

export default Navbar