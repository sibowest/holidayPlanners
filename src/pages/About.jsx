import React from 'react'
import ifoto1 from '../assets/Airport.jpg'
import ifoto2 from '../assets/TrainStation.jpg'
import {AiOutlineMinus} from 'react-icons/ai'

export default function About() {
  return (
    <div className='AboutUs'>
      <div className='amafoto'>
        <img src={ifoto2} alt="" className='ifoto1'/>
        <img src= {ifoto1} alt="" className='ifoto2'/>
      </div>
      <div className='bugufi'>
        <div >
          <span className="abouttitle">
            <span className='minusicon'></span>
          {/* <AiOutlineMinus className='minusicon'/> */}
          <h3>About us</h3>
          </span>
          <span className='aboutSubtitle'>Prepare Your <b>Trip</b> Along With <b>Us</b></span>
          <span className='muriMake'>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline
          </span>
          <button className='readMorebut'>read more</button>
        </div>
      </div>
    </div>
  )
}
