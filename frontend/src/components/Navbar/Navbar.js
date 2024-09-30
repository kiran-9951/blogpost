import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  const user =true
  return (
    <div>
      <div className='nav_container'>
        <Link to="/"><h3>Blog Posts</h3></Link>
        <input type='search' placeholder='search....' className='search-input'/>
        {user ? <h3>Write</h3>:   < Link to="/signup"> <h3 className='signup'>Signup</h3></Link>}
       {user ? <h3> Profile</h3> :<Link to="/login"><h3 className='login'>Login</h3></Link>}
      </div>
    </div>
  )
}

export default Navbar