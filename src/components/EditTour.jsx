import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { ToastContainer,toast } from "react-toastify"
import{useParams} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"


const EditTour = () => {
     
    const params = useParams()
    let tourId = params.id
    
    const navigate = useNavigate(); 
    const [image,setImage] = useState("");
    const [destination,setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [groupSize, setGroupSize] = useState("");
    const [price,setPrice] = useState("");
    const [discount,setDiscount] = useState("");
    const [tourType,setTourType] = useState("");
    const [departure,setDeparture] =useState("");
    const [seats, setSeats] = useState("");
    const [fromMonth, setFromMonth] = useState("");
    const [toMonth,setToMonth] = useState("");
    const [departureTime,setDepartureTime] = useState("");
    const [returnTime, setReturnTime] = useState("");
    const [initial,setInitial] = useState([]);

    
    const fetchTour = () =>{
        
        let token = localStorage.getItem("token")
        axios({
            method:"GET",
            url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setDestination(response?.data?.destination)
            setDuration(response?.data?.Duration)
            setGroupSize(response?.data?.GroupSize)
            setPrice(response?.data?.Price)
            setDiscount(response?.data?.Discount);
            setTourType(response?.data?.TourType);
            setDeparture(response?.data?.Departure);
            setSeats(response?.data?.Seats);
            setFromMonth(response?.data?.fromMonth);
            setToMonth(response?.data?.toMonth);
            setDepartureTime(response?.data?.departureTime);
            setReturnTime(response?.data?.returnTime);
            console.log(response)
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
        fetchTour()
    },[])

    const handleImage = (e) => {
        e.preventDefault();
        console.log(e.target.files[0],"file")
        setImage(e.target.files[0])
    }
    
     

    const handleForm = (e) => {
        e.preventDefault();

        let token = localStorage.getItem("token")

        const formData = new FormData();
        formData.append("backdropImage", image);
        formData.append("destination", destination);
        formData.append("Duration",duration);
        formData.append("GroupSize", groupSize);
        formData.append("Price", price);
        formData.append("Discount",discount)
        formData.append("TourType", tourType)
        formData.append("Departure",departure)
        formData.append("Seats",seats)
        formData.append("fromMonth",fromMonth)
        formData.append("toMonth",toMonth)
        formData.append("departureTime",departureTime)
        formData.append("ReturnTime",returnTime)

        axios({
            method: "PUT",
            url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
            data: formData,
            headers:{
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },

        })
        .then((response) => {
            console.log(response);

            toast.success(response.data.message);
            setTimeout(() => {
                navigate("/dashBoard/table");
            },3000)
            
        })
        .catch((error) => {
            // console.log(error);
            toast.error(error.message);
        })
    }
    return (
        <>
        
        <form action="" className="addTourForm">
            <ToastContainer className="addtourtoast"/>
            <label htmlFor="">destination photo</label>
                {/* <img src={initial} /> */}
                <input onChange={(e) => handleImage(e)} type="file" className="tourfile"/>
        
            <label htmlFor="">destination</label>
                <input
                value={destination}
                type="text" onChange={(e)=>{setDestination(e.target.value)}} placeholder="mention your next destination"/>
            
            <label htmlFor="">duration</label>
                <input 
                value={duration}
                type="text" onChange={(e) => {setDuration(e.target.value)}} placeholder="how long will you spend(stay)?"/>
           
            <label htmlFor="">group size</label>
                <input 
                value={groupSize}
                type="text" onChange={(e) => {setGroupSize(e.target.value)}} placeholder="let us know if you have company(number of people)"/>
            
            <label htmlFor=""> price</label>
                <input 
                value={price}
                type="text" onChange={(e)=>{setPrice(e.target.value)}} placeholder="This is the title"/>
                
            <label>discount</label>   
                <input
                value={discount}
                type="text" onChange={(e)=>{setDiscount(e.target.value)}} placeholder="this is the reduction to your tour cost"/>
            <label>type of tour</label>   
                <input
                value={tourType}
                type="text" onChange={(e)=>{setTourType(e.target.value)}} placeholder="this is the type of your tour"/>
            <label>departure</label>   
                <input
                value={departure}
                type="text" onChange={(e)=>{setDeparture(e.target.value)}} placeholder=""/>
            <label>seats</label>   
                <input
                value={seats}
                type="text" onChange={(e)=>{setSeats(e.target.value)}} placeholder="how many seats do you need"/>
            <label>from </label>   
                <input
                value={fromMonth}
                type="text" onChange={(e)=>{setFromMonth(e.target.value)}} placeholder="when will you start your tour?"/>
            <label>to</label>   
                <input 
                value={toMonth}
                type="text" onChange={(e)=>{setToMonth(e.target.value)}} placeholder="until when?"/>
            <label>time departure</label>   
                <input
                value={departureTime}
                type="text" onChange={(e)=>{setDepartureTime(e.target.value)}} placeholder="time of departure"/>
            <label>the return time</label>   
                <input
                value={returnTime}
                type="text" onChange={(e)=>{setReturnTime(e.target.value)}} placeholder="when will you return?" />
                
        
            {/* <label htmlFor="">phone</label>
            <input type="text" placeholder="Contact number"/> */}
            <button className="addTourbu" onClick={handleForm}>update tour</button>
        </form>
        </>
    );
}
 
export default EditTour;