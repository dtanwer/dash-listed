import React from 'react'
import './Login.scss'
import { NavLink, useNavigate } from 'react-router-dom'

import {auth,provider} from "../../firbase";
import {signInWithPopup} from "firebase/auth";

export default function Login() {
  const navigate=useNavigate()
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            localStorage.setItem("email",data.user.email)
            navigate('/auth');
        })
    }
  return (
    <div className='cont'>
      <div className="lft"><h1>Board.</h1></div>
      <div className="rgt">
        <div className="cent">
          <div className='formbox'>
            <div className='loginFormloginForm'>
              <h1 className='signHading'>Sign In</h1>
              <p className='myp'>Sign in to your account</p>
              <button onClick={handleClick} className='btn-signin'> <i className="fa-brands fa-google myicon"></i> <span className='btn-txt'>Sign in with Google</span></button>
              <button className='btn-signin'> <i className="fa-brands fa-apple myicon"></i> <span className='btn-txt'>Sign in with Apple</span></button>
            </div>
            <div className='loginForm'>
              <form action="">
              <label htmlFor="">Email address</label>
              <input type="email" name="email" />
              <label htmlFor="">Password</label>
              <input type="password" name="password"/>
              <p>Forgot password?</p>
              <NavLink to='/auth'><button type="submit">Sign in</button></NavLink>
              </form>
            </div>
            <div className='register'><p>Don't have an account? <span>Register here</span></p></div>

          </div>


        </div>

      </div>
    </div>
  )
}
