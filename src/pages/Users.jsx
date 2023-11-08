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


export default function Users() {
  // const params = useParams()
  // let usersId = params.id;
const navigate = useNavigate();
const [isFetch, setIsFetch] = useState(false);
const [tours, setTours] = useState([]);

let token = localStorage.getItem("token");

const fetchTours = () => {
  setIsFetch(true);
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
    headers:{
      Authorization: `Bearer ${token}`,
    },
  }).then((response) =>{
    setTours(response.data);
    setIsFetch(false);
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
    alert("Error showed up!!!");
  })
};

useEffect(() =>{
  fetchTours()
}, []);

const handleDeleteUser = (id) => {
  console.log(id, "ID")
  if(window.confirm("Are you sure that you want to delete this Tour???")) {
  
    let token = localStorage.getItem("token")
    axios({
      url:`https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
      method: "DELETE",
      headers:{
        Authorization:`Bearer $(token)`
      },
      // data: {
      //   fieldName: "_id",
      //   value: id
      // }
    })
    .then((response) => {
      toast.success("Tour deleted sucessfully!!!")
      console.log(response, "Response");
      setTimeout(() =>{
        navigate("/dashboard/users")
      },3000)
    }).catch((error) => {
      toast.error("Oops, fail to delete Tour!!!")
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
          <p className='dura'>Role</p>
          <p className='acts'>actions</p>
        </li>
        {/* map placement */}
        {tours.map((item) => {
          return (<li className='tableList'>
          <p className='dura'>{item.fullName}</p>
          <p className='dura'>{item.email}</p>
          <p className="dura">{item.role}</p>
          <p className='acts'><BsFillPencilFill onClick={() => {
            // alert("you clicked me!!!")
            navigate(`/dashBoard/editUser/${item._id}`)}} className='pencilon'/><MdDelete className='deleteon' onClick={() =>handleDeleteUser(item._id)}/></p>
        </li>); 
        })}
      </ul>
    </div>
  )
}
