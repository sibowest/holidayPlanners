import React from 'react'
import {useState} from 'react';
import {FaRegEnvelope} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import{IoSearchCircleOutline} from 'react-icons/io5'
import {HiMiniBars3BottomRight} from 'react-icons/hi2'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {AiFillCloseSquare} from 'react-icons/ai'
import logo from '../assets/logo1.png'
import l1 from '../assets/holiday1.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closedModal = () => {
        setIsOpen(false);
    };
  return (
    <>
    <div className="allNav">
        <div className="navBar">
                    <span className='span-title sp1 hovering'><span className='cont co1'><FaRegEnvelope className='icons hov'/><p className='hov'>Holidayplanners@gmail.com</p></span></span>
                    <span className='span-title sp2 hovering'><span className="cont co2"><BsFillTelephoneFill className='icons hov'/><p className='hov'>+250 783955044</p></span></span>
                    <span className='span-title sp3 hovering'><span className="cont co3"><FaFacebookF className='icons hov'/></span></span>
                    <span className='span-title sp4 hovering'><span className="cont co4"><FaInstagram className='icons hov'/></span></span>
                    <span className='span-title sp5 hovering'><span className="cont co5"><FaTwitter className='icons hov'/></span></span>
                </div>
                <div className="subNav">
                    <span className='logo'><img src={logo} alt="" /></span>
                    <span className='but1'><button className='but11'>reserve</button></span>
                    <span className='icSearch'><IoSearchCircleOutline className='search'/></span>
                    <span className='but3bar'><button className='but12' onClick={openModal}><HiMiniBars3BottomRight className='fbar'/></button>
                          {isOpen && <span className='mainTab'>
                            <span className='iconLogo'>
                                <span className='log'><img src={l1} className='imlogo' onClick={closedModal}/></span>
                                <span className='closeIcon'><AiFillCloseSquare  className='close' onClick={closedModal}/></span>
                            </span>
                                <span className='webSections'>
                                    <ul className='sectionlist'>
                                        <li><Link to="/" onClick={closedModal} className='sectionLinks'>Home</Link></li>
                                        {/* <li><Link to="/dashBoard" onClick={closedModal} className='sectionLinks'>DashBoard</Link></li> */}
                                        <li><Link to="/about" onClick={closedModal} className='sectionLinks'>About</Link></li>
                                        <li><Link to="/Tour" onClick={closedModal}  className='select sectionLinks'>Tour</Link>
                                            {/* <select name="" id="" className='select sectionLinks'>Tour
                                                <option value="option1"></option>
                                                <option value="option2">Tour</option>
                                                <option value="option3">Tour Detail</option>
                                            </select></Link> */}
                                        </li>
                                        <li><Link to="/loginForm" onClick={closedModal} className='sectionLinks'>LoginForm</Link></li>
                                        <li><Link to="/signUp" onClick={closedModal} className='sectionLinks'>SignUp</Link></li>
                                        <li><Link to="/contact" onClick={closedModal} className='sectionLinks'>Contact</Link></li>
                                        {/* <li><Link to="/Footer" onClick={closedModal} className='sectionLinks'>Footer</Link></li> */}
                                    </ul> 
                                </span>
                        </span>

                          }  
                    </span>
                </div>
    </div>
    </>
  )
}
