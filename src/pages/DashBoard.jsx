import React from 'react'
import { Outlet } from 'react-router-dom'
import DashSide from '../components/DashSide'
import DashTable from '../components/DashTable'
import DashNav from '../components/DashNav'
export default function DashBoard() {
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
