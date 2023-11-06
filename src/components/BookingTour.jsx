import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { ToastContainer,toast } from "react-toastify"
import{useParams} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";


const BookingTour = () => {
     
    const params = useParams()
    let bookId = params.id
    
    const [image,setImage] = useState("");
    const [destination,setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [groupSize, setGroupSize] = useState("");
    const [price,setPrice] = useState("");
    const [initial,setInitial] = useState([]);

    
    const fetchTour = () =>{
        
        let token = localStorage.getItem("token")
        axios({
            method:"GET",
            url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${bookId}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setDestination(response?.data?.destination)
            setDuration(response?.data?.Duration)
            setGroupSize(response?.data?.GroupSize)
            setPrice(response?.data?.Price)
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

        axios({
            method: "PUT",
            url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${bookId}`,
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
                navigate("dashBoard/table");
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
        
            {/* <label htmlFor="">phone</label>
            <input type="text" placeholder="Contact number"/> */}
            <button className="addTourbu" onClick={handleForm}>update tour</button>
        </form>
        </>
    );
}
 
export default BookingTour;