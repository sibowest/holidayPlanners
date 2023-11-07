import React from 'react'
// import Tour1 from '../assets/Tour1.jpg'
// import Tour2 from '../assets/Tour2.jpg'
// import Tour4 from '../assets/Tour4.jpg'
import {MdGroup} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import {BsTelephoneFill} from 'react-icons/bs'
import {FaUserTag} from 'react-icons/fa6'
import {IoIosInformationCircle} from 'react-icons/io'
import {GoBook} from 'react-icons/go'
import {LiaCameraRetroSolid} from 'react-icons/lia'
import {MdGroups} from 'react-icons/md'
import {AiFillClockCircle} from 'react-icons/ai'
import {FaUserGroup} from 'react-icons/fa6'
import {FaUserPlus} from 'react-icons/fa'
import {FaSun} from 'react-icons/fa6'
import highlight from '../assets/highlight-video.mp4'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import detailtour1 from '../assets/detailtour1.jpg'
import detailtour2 from '../assets/detailtour2.jpg'
import detailtour3 from '../assets/detailtour3.jpg'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function TourDetail() {
  
  

  /* -----------------------------------------------------------------------  */

  const [destinationImage, setDestinationImage] = useState();
  const [destination, setDestination] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [groupSize, setGroupSize] = useState();
  const [price, setPrice] = useState();
  const [discount,setDiscount] = useState("");
  const [tourType,setTourType] = useState("");
  const [departure,setDeparture] =useState("");
  const [seats, setSeats] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [toMonth,setToMonth] = useState("");
  const [departureTime,setDepartureTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  
  const fetchTour = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setDestinationImage(response?.data?.backdropImage);
        setDestination(response?.data?.destination);
        setTitle(response?.data?.Title);
        setDescription(response?.data?.Description);
        setDuration(response?.data?.Duration);
        setGroupSize(response?.data?.GroupSize);
        setPrice(response?.data?.Price);
        setDiscount(response?.data?.Discount);
        setTourType(response?.data?.TourType);
        setDeparture(response?.data?.Departure);
        setSeats(response?.data?.Seats);
        setFromMonth(response?.data?.fromMonth);
        setToMonth(response?.data?.toMonth);
        setDepartureTime(response?.data?.departureTime);
        setReturnTime(response?.data?.ReturnTime);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTour();
  }, []);

  
/* -----------------------------------------------------------------------  */



  
  const [bookFormName, setBookFormName] = useState("");
  const [bookFormEmail,setBookformEmail] = useState("");
  const [bookFormPhone, setBookFormPhone] = useState("");
  const [bookFormDate, setBookFormDate] = useState("");
  const [bookFormTicket,setBookFormTicket] = useState("");

  const params = useParams()
  let tourId = params.id;
  console.log(tourId);

  const submitBookings = (e) =>{
    e.preventDefault();
    
    let data = new FormData();
    data.append("tourID", tourId);
    data.append("fullname", bookFormName);
    data.append("email", bookFormEmail);
    data.append("phone",bookFormPhone);
    data.append("date", bookFormDate);
    data.append("numberOfTickets", bookFormTicket);

    let token = localStorage.getItem("token");
    console.log("test",token);
    axios({
        method:"POST",
        url:"https://holiday-planner-4lnj.onrender.com/api/v1/booking/create",
        data: data,
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-type" : "application/json"
        }
    }).then((response) => {
      console.log(response);
      toast.success("Thanks for booking!!!");
      setTimeout(() =>{
        Navigate("/");
      }, 3000);
        
        console.log(response)
    }).catch((error) =>{
        console.log(error)
        toast.error(error.message);
    });
};




  return (
    <div>
      <div className='detailtour'
        style={{ backgroundImage: `url(${destinationImage})` }}
      >
        <ToastContainer/>
        <div className="detailtour1">
        <h1 className='detailtourHead'>{title}</h1>
        </div>
      </div>
      <div className="detailmainTour">
      <div className="detailsubmainTour1">
        <div className="detailsortings">
          <ul className="detailsortingLists">
            <li className="detsortList listde"><IoIosInformationCircle className='detsortlist listde1'/>information</li>
            <li className="detsortList"><GoBook className='detsortlist'/>tour plan</li>
            <li className="detsortList"><FaLocationDot className='detsortlist'/>location</li>
            <li className="detsortList"><LiaCameraRetroSolid className='detsortlist'/>gallery</li>
            <li className="detsortList"><MdGroups className='detsortlist'/>review</li>
          </ul>
        </div>
        <div className="detailTour">
          <div className="detailTour1">
            <h1 className="detailTour11">
              {description}
            </h1>
            <div className="detailTour12">
              <p className='detailTour121'>{price}</p>
              <div className="detailTour122"></div>
              <p className="detailTour123">per person</p>
            </div>
            <div className="detailTour124">
              <p className='detailTour124p1'>{discount}</p>
              <p className='detailTour124p2'>off</p>
            </div>
          </div>
          <div className="detailTour2">
            <ul className="detailTour21">
              <li className="detailTour211"><AiFillClockCircle className='detsortlists'/>{duration}</li>
              <li className="detailTour211"><FaUserGroup className='detsortlists'/>{groupSize}</li>
              <li className="detailTour211"><FaUserPlus className='detsortlists'/>{seats}seats</li>
              <li className="detailTour211"><FaLocationDot className='detsortlists'/>{destination}</li>
              <li className="detailTour211"><FaSun className='detsortlists'/>descovery</li>
            </ul>
          </div>
          <div className="detailTour3">
            <p className="detailTour31">
              {description}
            </p>
            <p className="detailTour31">
              {description}
            </p>
          </div>
          <div className="detailTour4">
            <video controls autoPlay muted loop className="detailTour41">
               <source src={highlight} type="video/mp4"/>
            </video>
          </div>
          <div className="detailTour5">
            <table className='detailTour51'>
              <tr className="detailTour52">
                <td className='detailTour521 right'>destination</td>
                <td className='detailTour521 left'>{destination}</td>
              </tr>
              <tr className="detailTour52">
                <td className='detailTour521 right'>departure</td>
                <td className='detailTour521 left'>{departure}</td>
              </tr>
              <tr className="detailTour52">
                <td className='detailTour521 right'>departure time</td>
                <td className='detailTour521 left'>{departureTime}</td>
              </tr>
              <tr className="detailTour52">
                <td className='detailTour521 right'>return time</td>
                <td className='detailTour521 left'>{returnTime}approximately</td>
              </tr>
              <tr className="detailTour52">
                <td className='detailTour521 right'>dress code</td>
                <td className='detailTour521 left'>comfortable clothing and light jacket.</td>
              </tr>
              <tr className="detailTour52">
                <td className='detailTour521 right'>price included</td>
                <td className='detailTour521 left'>
                  <ul className="detailTour5211">
                    <li><TiTick className='tick'/>5 star accomodation</li>
                    <li><TiTick className='tick'/>air fases</li>
                    <li><TiTick className='tick'/>3 nights hotel accomodation</li>
                    <li><TiTick className='tick'/>all transport in destination</li>
                  </ul>
                </td>
              </tr>
              <tr className="detailTour52">
                <td className='detailTour521 right'>price not included</td>
                <td className='detailTour521 left'>
                  <ul className="detailTour5211">
                      <li><ImCross className='tick1'/>5 star accomodation</li>
                      <li><ImCross className='tick1'/>air fases</li>
                      <li><ImCross className='tick1'/>3 nights hotel accomodation</li>
                      <li><ImCross className='tick1'/>all transport in destination</li>
                    </ul>
                </td>
              </tr>
            </table>
          </div>
          <div className="tourdetailslides">
            <img src={detailtour1} alt="" className="tourdetailslides1"/>
            <img src={detailtour2} alt="" className="tourdetailslides1"/>
            <img src={detailtour3} alt="" className="tourdetailslides1"/>
          </div>
        </div>
      </div>
      <div className="detailtour77">
      <form className="detailsubmainTour2">
        <h1 className="detailsubmaintourHead">book this tour</h1>
        <div className="detailtourSearch">
          <FaUser className='detailuturango'/>
          <input type="text" placeholder='Full Name*'
          

          onChange={(e) =>{
            e.preventDefault();
            setBookFormName(e.target.value);
          }}
          
          />
        </div>
        <div className="detailtourLocation">
          <FaEnvelope className='detailuturango'/>
          <input type="email" placeholder='Email*'
          
          onChange={(e) =>{
            e.preventDefault();
            setBookformEmail(e.target.value);
          }}
          
          />
        </div>
       <div className="detailtourLocation">
          <FaEnvelope className='detailuturango'/>
          <input type="email" placeholder='Confirm Email*'/>
        </div>
        <div className="detailtourLocation">
          <BsTelephoneFill className='detailuturango'/>
          <input type="text" placeholder='Phone*'
          
          onChange={(e) =>{
            e.preventDefault();
            setBookFormPhone(e.target.value);
          }}
          
          />
        </div>
        <div className="detailtourLocation date">
          <FaCalendarAlt className='detailuturango'/>
          <input type="date" className='detailDate'
          
          onChange={(e) =>{
            e.preventDefault();
            setBookFormDate(e.target.value);
          }}
          
          />
        </div>
        <div className="detailtourLocation">
          <FaUserTag className='detailuturango'/>
          <input type="number" placeholder='Number Of Tickets'

            onChange={(e) =>{
              e.preventDefault();
              setBookFormTicket(parseInt(e.target.value));
            }}
            
          
          />
        </div>
        <textarea name="" id="" cols="30" rows="10" className="detailtourLocation textarea" placeholder='Message'></textarea>
        <div className="availability">
          <input type="checkbox" />
          <h4 className='checkText'>check availability</h4>
        </div>
        <button className="detailsubmaintourFindnow"
          onClick={submitBookings}
        >book now</button>
      </form>
      {/* <div className='contactDetails77'> */}
          <div className="detailcontactDetails17 detailcontDet17">
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
              <FaEnvelope className='detailcontaccons'/>
                <p>holidayplanners@gmail.com</p>
              </span>
              <span>
                < AiFillPhone className='detailcontaccons'/>
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
