import React, { useState } from 'react'
import { useEffect } from 'react'
import {BsFillPencilFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import { Link, Navigate } from 'react-router-dom'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'


export default function DashTable() {
const navigate = useNavigate();
const [isFetch, setIsFetch] = useState(false);
const [tours, setTours] = useState([]);
const [pageTourNumber, setPageTourNumber] = useState(0);
const toursPerPage = 8
const visitedTourPage = pageTourNumber * toursPerPage
const displayTours = tours
.slice(visitedTourPage, visitedTourPage + toursPerPage)
.map((item) => {
  return (<li className='tableList'>
  <p className='dest'><img src={item.backdropImage} alt="Desti-View" className='dest backdropImage'/></p>
  
  <p className='dura'>{item.destination}</p>
  <p className='dura'>{item.Duration}</p>
  <p className='gsize'>{item.GroupSize}</p>
  <p className='price'>{item.Price}</p>
  <p className='acts'><BsFillPencilFill onClick={() => {
    // alert("you clicked me!!!")
    navigate(`/dashBoard/editTour/${item._id}`)}} className='pencilon'/><MdDelete className='deleteon' onClick={() =>handleDeleteTour(item._id)}/></p>
</li>); 
})


let token = localStorage.getItem("token");

const fetchTours = () => {
  setIsFetch(true);
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
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

const handleDeleteTour = (id) => {
  console.log(id, "ID")
  if(window.confirm("Are you sure that you want to delete this Tour???")) {
  
    let token = localStorage.getItem("token")
    axios({
      url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id}`,
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
      console.log(response, "Response")
    }).catch((error) => {
      toast.error("Oops, fail to delete Tour!!!")
      console.log(error, "Error")
    })
  }
}

  const tourPageCount = Math.ceil(tours.length / toursPerPage);
  const changeTourPage = ({selected}) => {
    setPageTourNumber(selected);
  };

  return (
    <div>
      <ToastContainer/>
      <ul className="DashTable1">
        <div className="addTour">
         <Link to="/dashBoard/addTour" className="addTourbutoon"><button className="addTourbut"><BsFillPlusCircleFill className="addTourbuton"/>add tour</button></Link>
        </div>
        <li className='tableHeads'>
          <p className='dest'>destination view</p>
          <p className='dest'>destination</p>
          <p className='dura'>duration</p>
          <p className='gsize'>group size</p>
          <p className='price'>price</p>
          <p className='acts'>actions</p>
        </li>
        <li>
          {displayTours}
          <ReactPaginate
          prevPageRel={"ahabanza"}
          nextLabel={"ahakurikira"}
          pageCount={tourPageCount}
          onPageChange ={changeTourPage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"bttn"}
          nextLinkClassName={"bttn"}
          activeClassName={"paginationActive"}
          />
        </li>
      </ul>
    </div>
  )
}
