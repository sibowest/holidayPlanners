import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { ToastContainer,toast } from "react-toastify"
import{useNavigate, useParams} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner"


const EditBooking = () => {
     const [isLoading, setIsLoading] = useState(false);
    const params = useParams()
    let id = params.id
    // alert(tourId)
    const navigate = useNavigate(); 
    const [fullName,setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [numberOfTickets, setNumberOfTickets] = useState("");
    const [initial,setInitial] = useState([]);

    
    const fetchBooking = () =>{
    
        // console.log("West")
        let token = localStorage.getItem("token")
        axios({
            method:"GET",
            url:`https://holiday-planner-4lnj.onrender.com/api/v1/booking/${id}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setFullName(response?.data?.fullname)
            setEmail(response?.data?.email)
            setPhone(response?.data?.phone)
            setDate(response?.data?.date)
            setNumberOfTickets(response?.data?.numberOfTickets)
            console.log(response)
        }).catch((error) =>{
            console.log(error)
            
        })
    }

    useEffect(() => {
        fetchBooking();
    },[])

   
    
     

    const handleBookingForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let token = localStorage.getItem("token")

        const Data = {
        fullname: fullName,
        email:email,
        phone: phone,
        date: date,
        numberOfTickets: numberOfTickets,
        }

        axios({
            method: "PUT",
            url:`https://holiday-planner-4lnj.onrender.com/api/v1/booking/update/${id}`,
            data: Data,
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

        })
        .then((response) => {
            console.log(response);
            toast.success("Update Booking Successfully!!!")
            toast.success(response.data.message);
            setIsLoading(false);
            setTimeout(() => {
                navigate("/dashBoard/bookings");
            },3000)
            
        })
        .catch((error) => {
            // console.log(error);
            toast.error(error.message);
            setIsLoading(false);
        })
    }
    return (
        <>
        
        <form action="" className="addTourForm">
            <ToastContainer className="addtourtoast"/>
        
            <label htmlFor="">full name</label>
                <input
                value={fullName}
                type="text" onChange={(e)=>{setFullName(e.target.value)}} placeholder="Update User full name"/>
            
            <label htmlFor="">email</label>
                <input 
                value={email}
                // disabled={true}
                type="text" onChange={(e) => {setEmail(e.target.value)}} placeholder="Update User Email"/>
           
            <label htmlFor="">phone</label>
                <input 
                value={phone}
                type="text" onChange={(e) => {setPhone(e.target.value)}} placeholder="Update User Title"/>

                 <label htmlFor="">date</label>
                <input 
                value={date}
                type="date" onChange={(e) => {setDate(e.target.value)}}/>

                <label htmlFor="">number of tickets</label>
                <input 
                value={numberOfTickets}
                type="text" onChange={(e) => {setNumberOfTickets(e.target.value)}} placeholder="Update number of tickets"/>
            <button className="addTourbu" onClick={handleBookingForm}>{isLoading ? <ThreeCircles
  height="50"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="black"
  innerCircleColor="#cc8809"
  middleCircleColor="#ffff"
/>: "update booking tour"}</button>
        </form>
        </>
    );
}
 
export default EditBooking;