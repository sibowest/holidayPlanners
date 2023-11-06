import React, { useState } from 'react'
import { useEffect } from 'react'
import {BsFillPencilFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import { Link, Navigate } from 'react-router-dom'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useParams } from 'react-router-dom'


export default function Bookings() {
  // const params = useParams()
  // let usersId = params.id;

const navigate = useNavigate();
const [booking, setBooking] = useState([]);
const [fetch, setIsFetch] = useState();

let token = localStorage.getItem("token");

const fetchBooking = () => {
  setIsFetch(true);
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
    headers:{
      Authorization: `Bearer ${token}`,
    },
  }).then((response) =>{
    setBooking(response.data);
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
    alert("Error showed up!!!");
    toast.error(error.message);
  });
};

useEffect(() =>{
  fetchBooking()
}, []);

const handleDeleteBooking = (id) => {
  // console.log(id, "ID")
  if(window.confirm("Are you sure that you want to delete this Booking???")) {
  
    let token = localStorage.getItem("token")
    axios({
      url:`https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
      method: "DELETE",
      headers:{
        Authorization:`Bearer $(token)`
      },
      
    })
    .then((response) => {
      toast.success("Booking deleted sucessfully!!!")
      console.log(response, "Response");
      setTimeout(() =>{
        navigate("/dashboard/bookings")
      },3000)
    }).catch((error) => {
      toast.error("Oops, fail to delete Current Booking!!!")
      console.log(error, "Error")
    })
  }
}
  return (
    <div>
      <ToastContainer/>
      <ul className="DashTable1">
        <li className='tableHeads'>
          <p className='dest'>full name</p>
          <p className='dest'>Email</p>
          <p className='dura'>Phone</p>
          <p className='dura'>Date</p>
          <p className='dura'>Number Of Tickets</p>
          <p className='acts'>actions</p>
        </li>
        {/* map placement */}
        {booking.map((booking) => {
          return (<li className='tableList'>
          <p className='dura'>{booking.fullname}</p>
          <p className='dura'>{booking.email}</p>
          <p className="dura">{booking.phone}</p>
          <p className="dura">{booking.date}</p>
          <p className="dura">{booking.numberOfTickets}</p>
          <p className='acts'><BsFillPencilFill onClick={() => {
            // alert("you clicked me!!!")
            navigate(`/dashBoard/editBooking/${booking._id}`)}} className='pencilon'/><MdDelete className='deleteon' onClick={() =>handleDeleteBooking(booking._id)}/></p>
        </li>); 
        })}
      </ul>
    </div>
  )
}
