import {BiLogoFacebook} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import loginImage from '../assets/loginImage.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner';
const SignUp = () => {
    const navigate = useNavigate();
    const [fullName, setFullNames] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const notify = () => toast("Registered!!!");
    const handleSignup = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios({
            method:'POST',
            url:'https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup',
            data:{
                fullName: fullName,
                email: email,
                password: password,
            },
        })
        .then((Response) => {
            localStorage.setItem("token", Response.data.access_token);
            toast.success("Success")
            setTimeout(() => {
                navigate("/loginForm");
            }, 3000);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error)
            toast.error('failed to signup!!!');
            setIsLoading(false);
        })
    }
    return (
        <div>
            <div className="logIn">
            <ToastContainer/>
            <div className="login">
            <form action="" className="logInForm">
            <h1 className="h1logInForm">
                signUp
            </h1>
            <p className="p1logInForm">
                Doesn't have an account yet?<Link to='/loginForm' className='inuplinks'>Login</Link>
            </p>
            <label htmlFor="" className='loglabel'>Full Name</label>
            <input 
            onChange={(e) => {
                e.preventDefault();
                setFullNames(e.target.value);
            }}
            type="text" className="logput"/>
            <label htmlFor="" className='loglabel'>email address</label>
            <input 
            
            onChange={(e) =>{
                e.preventDefault();
                setEmail(e.target.value);
            }}
            type="email" className="logput"/>
            <label htmlFor="" className='loglabel loglabelpass'>password
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
            onClick={(e) => handleSignup(e)}
            className='loginButton'>{isLoading ? <InfinitySpin 
                width='200'
                color="#ffff"
              className="loading"/> : "Sign up"}</button>
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
    </div>
    );
}
 
export default SignUp;