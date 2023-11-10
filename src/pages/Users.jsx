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
import ReactPaginate from 'react-paginate'
import { Triangle } from 'react-loader-spinner'


export default function Users() {
  // const params = useParams()
  // let usersId = params.id;
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();
const [isFetch, setIsFetch] = useState(false);
const [users, setUser] = useState([]);
const [usersPageNumber, setUsersPagenumber] = useState(0);
const usersPerPage = 16
const visitedUserspage =  usersPageNumber * usersPerPage
const displayUsersPage = users
.slice(visitedUserspage, visitedUserspage + usersPerPage)
.map((item) => {
  return (<li className='tableList'>
  <p className='dura'>{item.fullName}</p>
  <p className='dura'>{item.email}</p>
  <p className="dura">{item.role}</p>
  <p className='acts'><BsFillPencilFill onClick={() => {
    // alert("you clicked me!!!")
    navigate(`/dashBoard/editUser/${item._id}`)}} className='pencilon'/><MdDelete className='deleteon' onClick={() =>handleDeleteUser(item._id)}/></p>
</li>); 
})

let token = localStorage.getItem("token");

const fetchUser = () => {
  setIsLoading(true);
  setIsFetch(true);
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
    headers:{
      Authorization: `Bearer ${token}`,
    },
  }).then((response) =>{
    setUser(response.data);
    setIsFetch(false);
    setIsLoading(false);
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
    setIsLoading(false);
    alert("Error showed up!!!");
  })
};

useEffect(() =>{
  fetchUser()
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

  const usersPageCount = Math.ceil(users.length / usersPerPage);
  const changeUsersPage =({selected}) => {
    setUsersPagenumber(selected);
  };

  return (
    <div>
      {isLoading ? <Triangle
          color="#cc8809"
          ariaLabel="triangle-loading"
          wrapperStyle={{
          position:"fixed",
          top:"25rem",
          left:"55rem"
        }}
          wrapperClassName="triangle"
          visible={true}
        />:
        <ul className="DashTable1">
          <li className='tableHeads'>
            <p className='dest'>full name</p>
            <p className='dest'>Email</p>
            <p className='dura'>Role</p>
            <p className='acts'>actions</p>
          </li>
          <li>
            {displayUsersPage}
            <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={usersPageCount}
            onPageChange={changeUsersPage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"bttn"}
            nextLinkClassName={"bttn"}
            activeClassName={"paginationActive"}
            />
          </li>
          
        </ul>
      }
    </div>
  )
}
