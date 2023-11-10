import React from 'react'
import { useState } from 'react'
import {RiDashboard3Fill} from 'react-icons/ri'
import {TbTournament} from 'react-icons/tb'
import {MdAirplaneTicket} from 'react-icons/md'
import {HiUserGroup} from 'react-icons/hi2'
import {GrLogout} from 'react-icons/gr'
import {FaSignOutAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import dashBoard from '../assets/logo1.png'
import {FaBars} from 'react-icons/fa'
import {BsFillPlusCircleFill} from 'react-icons/bs'


export default function DashSide() {
  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => {
  //     setIsOpen(true);
  // };
  // const closedModal = () => {
  //     setIsOpen(false);
  // };
  return (
    <div>
      <div className="dashSide">
      <div className="backHome">
        <Link to='/'><img src={dashBoard} alt="" className="backHomebut" /></Link>
      </div>
      <ul className="dashNav">
        <li className="dashNavList"><RiDashboard3Fill className='dashNavListcons'/><Link to="/dashBoard" className='linktotable'>DashBoard</Link></li>
        <li className="dashNavList"><TbTournament className='dashNavListcons'/><Link to='table' className='linktotable'>Tours</Link></li>
        <li className="dashNavList"><MdAirplaneTicket className='dashNavListcons'/><Link to='bookings' className='linktotable'>Bookings</Link></li>
        <li className="dashNavList"><HiUserGroup className='dashNavListcons'/><Link to='users' className='linktotable'>Users</Link></li>
      </ul>
      {/* <div className="ibuto">
        <button className="logout"><FaSignOutAlt className=' logoutcon'/>logout</button>
      </div> */}
      </div>
    </div>
  )
}
