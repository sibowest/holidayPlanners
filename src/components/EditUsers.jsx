import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useParams } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"


const EditUsers = () => {

    const params = useParams()
    let id = params.id

    const navigate = useNavigate(); 
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [initial, setInitial] = useState([]);


    const fetchUser = () => {

        let token = localStorage.getItem("token")
        axios({
            method: "GET",
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne/?fieldName=_id&value=${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setFullName(response?.data?.fullName)
            setEmail(response?.data?.email)
            setRole(response?.data?.role)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchUser()
    }, [])


    const handleForm = (e) => {
        e.preventDefault();

        let token = localStorage.getItem("token")

        console.log("token", token)

        const data = {
            "fullName": fullName,
            "role": role,
        }

console.log(email, "email")
        axios({
            method: "PUT",
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${id}`,
            data: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

        })  
            .then((response) => {
                console.log(response);
                toast.success("Update user successfully");
                setTimeout(() => {
                    navigate("/dashBoard/users");
                }, 3000)

            })
            .catch((error) => {
                // console.log(error);
                toast.error(error.message);
            })
    }
    return (
        <>

            <form action="" className="addTourForm">
                <ToastContainer className="addtourtoast" />

                <label htmlFor="">full name</label>
                <input
                    value={fullName}
                    type="text" onChange={(e) => { setFullName(e.target.value) }} placeholder="Update User full name" />

                <label htmlFor="">email</label>
                <input
                    value={email}
                    disabled={true}
                    type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Update User Email" />

                <label htmlFor="">role</label>
                <input
                    value={role}
                    type="text" onChange={(e) => { setRole(e.target.value) }} placeholder="Update User Title" />
                <button className="addTourbu" onClick={handleForm}>update user credes</button>
            </form>
        </>
    );
}

export default EditUsers;