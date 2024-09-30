import React from 'react'
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div>
        <div class="container">
  <div class="heading">SignIn to your account</div>
  <form class="form" action="">
   
    <div class="input-field">
      <input
        required=""
       
        type="email"
        name="email"
        id="email"
      />
      <label for="email">Email</label>
    </div>
    <div class="input-field">
      <input
        required=""
       
        type="password"
        name="text"
        id="password"
      />
      <label for="username">Password</label>
    </div>

    <div class="btn-container">
      <button class="btn">Submit</button>
      <div class="acc-text">
        Don't have an account ?
       <Link to="/signup"> <p >Create Account</p></Link>
      </div>
    </div>
  </form>
</div>
    </div>
  )
}

export default Login