import React from 'react'
import logo from './pic/logo-removebg-preview-new.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Link to='/'>
      <div className='navbar'>
 <img className="shoe" src={logo} alt="logo" />
        <div className='btn-container'>
            <Link to="/product"><button className='btn btn1'>Login</button></Link>
            <button className='btn btn2'>Signup</button>

        </div>
    </div>
     </Link>
  )
}

export default Navbar