import {useState} from 'react';
// import {FaRegEnvelope} from 'react-icons/fa'
// import {BsFillTelephoneFill} from 'react-icons/bs'
// import {FaFacebookF} from 'react-icons/fa'
// import {FaInstagram} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
// import{IoSearchCircleOutline} from 'react-icons/io5'
// import {HiMiniBars3BottomRight} from 'react-icons/hi2'
// import {IoMdArrowRoundBack} from 'react-icons/io'
// import {AiFillCloseSquare} from 'react-icons/ai'
// import logo from '../assets/logo1.png'
// import homeBack from '../assets/HomeGround.jpg'
import "./Home.css"
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import FindNow from '../components/FindNow';
import About from './About';
import Slides from '../components/Slides';
import Contacts from '../pages/Contacts'
import Footer from '../components/Footer';
import Tour from './Tour';
import LoginForm from './LoginForm';
import DashBoard from './DashBoard';
import TrendingTour from './TrendingTour';
import Testimonal from './Testimonial';

const Home = () => {
    
    return (
            <div className="homePage">
                {/* <NavBar/> */}
                {/* <DashBoard/> */}
                <Slides />
                <About />
                <TrendingTour/>
                <Testimonal/>
                {/* <Contacts /> */}
                {/* <Tour /> */}
                {/* <LoginForm /> */}
                {/* <Footer /> */}
            </div>
    );
}
 
export default Home;