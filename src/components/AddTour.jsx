import React from "react"
import axios from "axios"
import { useState } from "react"
import { ToastContainer,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";



const AddTour = () => {
     
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
    
    
    const handleImage = (e) => {
        e.preventDefault();
        console.log(e.target.files[0],"file")
        setImage(e.target.files[0])
    }
    
    
    const formData = new FormData()
    formData.append("backdropImage", image)
    formData.append("destination", destination)
    formData.append("Duration",duration)
    formData.append("GroupSize", groupSize)
    formData.append("Price", price)
    formData.append("Discount",discount)
    formData.append("TourType", tourType)
    formData.append("Departure",departure)
    formData.append("Seats",seats)
    formData.append("fromMonth",fromMonth)
    formData.append("toMonth",toMonth)
    formData.append("departureTime",departureTime)
    formData.append("ReturnTime",returnTime)

    const handleForm = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url:"https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
            data: formData,
            headers:{
                "Content-Type": "multipart/form-data"
            }

        })
        .then((response) => {
            console.log(response);

            toast.success(response.data.message);
            setTimeout(() => {
                navigate("dashBoard/table");
            },3000)
            
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.message);
        })
    }
    return (
        <>
        {/* <div className="igitebo"> */}
        <form action="" className="addTourForm">
            <ToastContainer className="addtourtoast"/>
            <label htmlFor="">destination photo</label>
                <input onChange={(e) => handleImage(e)} type="file" className="tourfile"/>
        
            <label htmlFor="">destination</label>
                <input type="text" onChange={(e)=>{setDestination(e.target.value)}} placeholder="mention your next destination"/>
            
            <label htmlFor="">duration</label>
                <input type="text" onChange={(e) => {setDuration(e.target.value)}} placeholder="how long will you spend(stay)?"/>
           
            <label htmlFor="">group size</label>
                <input type="text" onChange={(e) => {setGroupSize(e.target.value)}} placeholder="let us know if you have company(number of people)"/>
            
            <label htmlFor=""> price</label>
                <input type="text" onChange={(e)=>{setPrice(e.target.value)}} placeholder="This is the title"/>
            <label>discount</label>   
                <input type="text" onChange={(e)=>{setDiscount(e.target.value)}} placeholder="this is the reduction to your tour cost"/>
            <label>type of tour</label>   
                <input type="text" onChange={(e)=>{setTourType(e.target.value)}} placeholder="this is the type of your tour"/>
            <label>departure</label>   
                <input type="text" onChange={(e)=>{setDeparture(e.target.value)}} placeholder=""/>
            <label>seats</label>   
                <input type="text" onChange={(e)=>{setSeats(e.target.value)}} placeholder="how many seats do you need"/>
            <label>from </label>   
                <input type="text" onChange={(e)=>{setFromMonth(e.target.value)}} placeholder="when will you start your tour?"/>
            <label>to</label>   
                <input type="text" onChange={(e)=>{setToMonth(e.target.value)}} placeholder="until when?"/>
            <label>time departure</label>   
                <input type="text" onChange={(e)=>{setDepartureTime(e.target.value)}} placeholder="time of departure"/>
            <label>the return time</label>   
                <input type="text" onChange={(e)=>{setReturnTime(e.target.value)}} placeholder="when will you return?"/>
            {/* <label htmlFor="">phone</label>
            <input type="text" placeholder="Contact number"/> */}
            <button className="addTourbu" onClick={handleForm}>addtour</button>
        </form>
        {/* </div> */}
        </>
    );
}
 
export default AddTour;