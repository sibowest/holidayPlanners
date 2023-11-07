import React from 'react'
import { Outlet } from 'react-router-dom'
import DashSide from '../components/DashSide'
import DashTable from '../components/DashTable'
import DashNav from '../components/DashNav'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashBoard() {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    console.log(token);
    if(token && user.role == "user"){
      navigate("/");
    }
    else if(!token){
      navigate("/loginForm");
    }

  }, []);
  return (
    <>
    <div className='dashMe'>
      <Outlet/>
      <DashNav/>
      <DashSide/>
    </div>
    </>
  )
}
