import React from 'react'
import contactGrobal from '../assets/contactGrobal.jpg'
import {BiSolidUser} from 'react-icons/bi'
import {FaEnvelope} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import {FaBook} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'
import bulb from '../assets/bulb.jpg'
import {FaLocationDot} from 'react-icons/fa6'
import {MdAlternateEmail} from 'react-icons/md'
export default function Contacts() {
  return (
    <div>
      <div className="contact">
        <div className="cont1">
          <h1 className='contHead'>contact us</h1>
        </div>
      </div>
      <div className='mainContact'>
        <div className='divcontactForm'>
          <form action="" className="contactForm">
            <div>
              <BiSolidUser className='contactIcons'/>
            <input type="text" placeholder='Full Name'/>
            </div>
            <div>
              <FaEnvelope  className='contactIcons'/>
            <input type="email" placeholder='Email'/>
            </div>
            <div>
            <AiFillPhone className='contactIcons'/>
            <input type="text" placeholder='Phone'/>
            </div>
            <div>
              <FaBook className='contactIcons'/>
            <input type="text" placeholder='Services'/>
            </div>
            <div className='extraMessage'>
            <textarea type="text" className='textareaMessage' placeholder='Message'/>
            </div>
            <div className='submitCont'>
            <button className='submitContbut'>submit</button>
            </div>
          </form>
        </div>
        <div className='contactDetails'>
          <div className="contactDetails1 contDet1">
            <h2>why book with us?</h2>
            <p><FaGreaterThan className='faGT'/>Best Price Guarantee</p>
            <p><FaGreaterThan className='faGT'/>customer care available 24/7</p>
            <p><FaGreaterThan className='faGT'/>free ttravel insurance</p>
            <p><FaGreaterThan className='faGT'/>hand-picked tour & activities</p>
          </div>
          <div className="contactDetails21">
            <div className="contactDetails2">
              <h2>get a question?</h2>
              <p className='contDetP'>In case you face any issue, dont hesitate to dive us a call. we are an expert team and we are happy to talk to you.</p>
              <span>
              <FaEnvelope className='contaccons'/>
                <p>holidayplanners@gmail.com</p>
              </span>
              <span>
                < AiFillPhone className='contaccons'/>
                <p>+250 784117604</p>
              </span>
              </div>
            </div>
        </div>
      </div>
      <div className="contactdivision">
        <div className="branches">
          <div className="brancheIndia">
            <h2>india office</h2>
            <p><FaLocationDot className='brancheIcons'/>54, Beside Shoping Mall, Gujarat</p>
            <p>< AiFillPhone className='brancheIcons'/>+250 784117604</p>
            <p><MdAlternateEmail className='brancheIcons' />holidayplanners@gmail.com</p>
          </div>
          <div className="brancheUsa">
            <h2>usa office</h2>
            <p><FaLocationDot className='brancheIcons'/>888 S Greenville. TX 75082, United States.</p>
            <p>< AiFillPhone className='brancheIcons'/>+123 456 7890</p>
            <p><MdAlternateEmail className='brancheIcons' />holidayplanners@gmail.com</p>
          </div>
          <div className="brancheVictoria">
            <h2>victoria office</h2>
            <p className='branch'><FaLocationDot className='brancheIcons branch'/>Main Street, Victoria 8007.</p>
            <p className='branch'>< AiFillPhone className='brancheIcons branch'/>+123 456 7890</p>
            <p className='branch'><MdAlternateEmail className='brancheIcons branch' />holidayplanners@gmail.com</p>
          </div>
        </div>
        <div className="contactMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.532726323092!2d30.088148375272187!3d-1.939462336689464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1697521920127!5m2!1sen!2srw" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='contMap'>
          </iframe>
        </div>
      </div>
    </div>
  )
}
