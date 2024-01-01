import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/Nav.css';

const Navbar = () => {

  return (
    <div className='nav'>
      
      <NavLink className='link' to="/">Home</NavLink>
      <Link className='link' to="/Product">Product</Link>
      <Link className='link' to="/Cart">Cart</Link>
      <Link className='link' to="/Login">Login</Link>
      <Link className='link' to="/Signup">Signup</Link>

    </div>
  )
}

export default Navbar