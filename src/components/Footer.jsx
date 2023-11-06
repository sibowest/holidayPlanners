import React from 'react'
import flogo1 from '../assets/logo1.png'
import footgo from '../assets/footer1.png'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import holiday1 from '../assets/holiday1.png'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='one'>
      <div className='footdiv1'>
        <span className='lo'><img src={holiday1} alt="" className='flogo1'/></span>
        <span className='ububuto'>
        Holiday Planners sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.
        </span>
        <div className="emailus">
          <form action="" className='emailform'>
          <input type="text" />
          <button className='emailbut'>submit</button>
          </form>
          <img src={footgo} alt="" className='paywith'/>
        </div>
      </div>
      <div className='footdiv2'>
        <h1>Navigation</h1>
        <div className='divider'></div>
        <ul className='navlist'>
          <li><Link to="/" className='footerlinks'>Home</Link></li>
          <li><Link to="/about" className='footerlinks'>About</Link></li>
          <li><Link to="/Tour" className='footerlinks'>Tour</Link></li>
          <li><Link to="/signUp" className='footerlinks'>Signup</Link></li>
          <li><Link to="/LoginForm" className='footerlinks'>Login</Link></li>
          <li><Link to="/contact" className='footerlinks'>Contact</Link></li>
        </ul>
      </div>
      <div className="help">
      <h1>Need Help?</h1>
        <div className='divider'></div>
        <div className='call ca1'>
          <span className='horiline'></span>
          <span className='spantitle'>
            <p>Call us</p>
            <h3>+250 783955044</h3>
          </span>
        </div>
        <div className='call'>
          <span className='horiline'></span>
          <span className='spantitle'>
            <p>Email for Us</p>
            <h3>holidayplanners@gmail.com</h3>
           </span>
        </div>
        <div className='call'>
        <span className='horiline'></span>
          <span className='spantitle'>
            <p>Location</p>
            <h3>Main Street, KG 250 Street</h3>
          </span>
        </div>
        <div className='call'>
        <span className='horiline'></span>
          <span className='spantitle'>
            <p>Follow us</p>
            <h3 className='socialMedia'>
              <FaFacebookF className='socialMedia1'/>
              <FaInstagram className='socialMedia2'/>
              <FaTwitter className='socialMedia3'/>
            </h3>
          </span>
        </div>
      </div>
      </div>
      <div className='footdiv11'></div>
      <div className='footdiv12'>
        <span className='cpyrght'>Copyright<AiOutlineCopyrightCircle className='cpcn'/> 2021 <Link to='https://geekcodelab.com/' className='fotlink'>Geek Code Lab</Link>. All Rights Reserved.</span>
        <span className='policy'>Privacy Policy</span>
        <span className='terms'>Terms of Use</span>
        <span className='cookies'>Cookie Policy</span>
      </div>
    </div>
  )
}
