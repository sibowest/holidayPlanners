import React, { useEffect } from 'react'
import Tour1 from '../assets/Tour1.jpg'
import Tour2 from '../assets/Tour2.jpg'
import Tour3 from '../assets/Tour3.jpg'
import Tour4 from '../assets/Tour4.jpg'
import {MdGroup} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'





export default function Tour() {
  
  const [toursList, setTourList] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const fetchTourList = () => {
  setIsFetch(true);
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
    headers:{
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setTourList(response.data);
    setIsFetch(false);
    console.log(response)
  }).catch((error) => {
    console.log(error)
    alert("error appear!!!");
  })
};

useEffect(() => {
  fetchTourList()
}, []);

  return (
    <div>
      <div className='tour'>
        <div className="tour1">
        <h1 className='tourHead'>tour list</h1>
        </div>
      </div>
      <div className="mainTour">
      <div className="submainTour1">
        <div className="sortings">
          <h3 className='sorthead'>Sort by:</h3>
          <select name="" id="" className="seleby">
            <option value="option1">Release Date</option>
            <option value="option2">Tour Date</option>
            <option value="option3">Title</option>
            <option value="option4">Price</option>
            <option value="option5">Popularity</option>
            <option value="option6">Rating</option>
            <option value="option7">Duration</option>
          </select>
          <select name="" id="" className='seleby sele'>
            <option value="option1">Descending</option>
            <option value="option2">Ascending</option>
          </select>
        </div>
        <div className="tourCards">
          {toursList.map((tour) =>{
            return (
              <div className="tourCard">
            <img src={tour.backdropImage} alt="" />
            <div className="cardDescription">
              <div className='country'>{tour.destination}</div>
              <div className="descri">
                <p>{tour.Title}</p>
                <p className='descr'></p>
              </div>
              <div className="time-size">
                <span className='duration'>
                  <h3><BiTimeFive className='cardcons'/>Duration</h3>
                  <p className='smallp'>{tour.Duration}</p>
                </span>
                <span className='groupSize'>
                  <h3><MdGroup className='cardcons'/>Group Size</h3>
                  <p className='smallp'>{tour.GroupSize}</p>
                </span>
              </div>
              <div className="footcards">
                  <p className='price'>$1200</p>
                  <button className='butCard' onClick={() => navigate(`/tourDetail/${tour._id}`)}>book now</button>
                </div>
            </div>
          </div>
            );
          })}
          
        </div>
      </div>
      <div className="tour77">
      <form className="submainTour2">
        <h1 className="submaintourHead">find your tour</h1>
        <div className="tourSearch">
          <AiOutlineSearch className='uturango'/>
          <input type="text" placeholder='Search Tour'/>
        </div>
        <div className="tourLocation">
          <FaLocationDot className='uturango'/>
          <input type="text" placeholder='Where To?'/>
        </div>
       <div className="tourMonth">
        <FaCalendarAlt className='uturango'/>
       <select name="" id="" className='tourLocation tourselec'>
          <option value="option1">Month</option>
          <option value="option2">January</option>
          <option value="option3">February</option>
          <option value="option4">March</option>
          <option value="option5">April</option>
          <option value="option6">May</option>
          <option value="option7">June</option>
          <option value="option8">July</option>
          <option value="option9">August</option>
          <option value="option10">September</option>
          <option value="option11">October</option>
          <option value="option12">November</option>
          <option value="option13">December</option>
        </select>
       </div>
        <h3 className="submaintourhead3">
          duration
        </h3>
        <select name="" id="" className='tourLocation tourselec1'>
        <option value="option1">Any</option>
          <option value="option2">1 Day Tour</option>
          <option value="option3">2-4 Day Tour</option>
          <option value="option4">5-7 Day Tour</option>
          <option value="option5">7+ Day Tour</option>
        </select>
        <div className="subtourPrice">
          <div className="minPrice">
            <h3>min price</h3>
            <input type="number" />
          </div>
          <div className="maxPrice">
            <h3>max price</h3>
            <input type="number" />
          </div>
        </div>
        <div className="tourCheckBox">
          <label htmlFor="">
            <input type="checkbox" name="" id=""/>
            Cultural
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id=""/>
            Adventure
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id=""/>
            Historical
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id=""/>
            Seaside
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id=""/>
            Discovery
          </label>
        </div>
        <button className="submaintourFindnow">find now</button>
      </form>
      {/* <div className='contactDetails77'> */}
          <div className="contactDetails17 contDet17">
            <h2>why book with us?</h2>
            <p><FaGreaterThan className='faGT'/>Best Price Guarantee</p>
            <p><FaGreaterThan className='faGT'/>customer care available 24/7</p>
            <p><FaGreaterThan className='faGT'/>free ttravel insurance</p>
            <p><FaGreaterThan className='faGT'/>hand-picked tour & activities</p>
          </div>
          <div className="contactDetails217">
            <div className="contactDetails27">
              <h2>get a question?</h2>
              <p>In case you face any issue, dont hesitate to dive us a call. we are an expert team and we are happy to talk to you.</p>
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
        {/* </div> */}
      </div>
      </div>
      
    </div>
    
  )
}
