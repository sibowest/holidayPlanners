import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import loginImage from '../assets/loginImage.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    const LoginForm = () => {
      
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handlelogin = (e) => {
      e.preventDefault();
      setIsLoading(true);
      axios({
          method:'POST',
          url:'https://holiday-planner-4lnj.onrender.com/api/v1/auth/login',
          data:{
              email: email,
              password: password,
          },
      })
      .then((Response) => {
        console.log(Response)
          localStorage.setItem("token", Response.data.access_token);
          toast.success("Thanks for logging in!!!");
          setTimeout(() =>{
            if(Response.data.user.role == "admin"){
              navigate("/dashBoard");
            }else{
              navigate("/");
            }
          }, 3000);
          
      })
      .catch((error) => {
          console.log(error)
          toast.error("Oops, login failed!!!");
      })
  }
  return (
    <div className="logIn">
      <ToastContainer/>
      <div className="login">
         <form action="" className="logInForm">
          <h1 className="h1logInForm">
            login
          </h1>
          <p className="p1logInForm">
            Doesn't have an account yet?<Link to='/signUp' className='inuplinks'>Sign Up</Link>
          </p>
          <label htmlFor="" className='loglabel'>email address</label>
          <input 
           onChange={(e) =>{
            e.preventDefault();
            setEmail(e.target.value);
        }}
          type="email" className="logput"/>
          <label htmlFor="" className='loglabel loglabelpass'>password
          <div className='loginforget'><Link className='inuplinks'>Forgot Password?</Link></div>
          </label>
          <input 
         onChange={(e) =>{
          e.preventDefault();
          setPassword(e.target.value);
      }}
          type="password" className='logput'/>
          <label htmlFor="" className='loglabel labelCheck'>
          <input type="checkbox" className='logcheckput'/>
          remember me
          </label>
          <button 
           onClick={(e) => handlelogin(e)}
          className='loginButton'>{isLoading ? "loging you in..." : "login"}</button>
          <div className="logmedia">
          <button className='loggoogleButton'><FcGoogle className='loginos'/>Google</button>
          <button className='loginfacebookButton'><BiLogoFacebook className='loginos'/>facebook</button>
          </div>
         </form>
         <div className="sidegroundlogin">
          <img src={loginImage} alt="" className='loginlogo' />
         </div>
         </div>
    </div>
  )
}

export default LoginForm
