import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {FaCalendarAlt} from 'react-icons/fa'
import {HiMiniFlag} from 'react-icons/hi2'

export default function FindNow() {
  return (
    <div className='findMe'>
        <div className="findOut">
            <div className='choices'>
            <FaLocationDot className='findIcs'/>
            <input type="text" placeholder='Where To?' className='inOne'/>
            </div>
            <div className='choices'>
            <FaCalendarAlt className='findIcs'/>
            <select name="" id="" className='inOne'>
                <option value="option1" >When?</option>
                <option value="option2">January</option>
                <option value="option3">February</option>
                <option value="option4">March</option>
                <option value="option5">April</option>
                <option value="option6">May</option>
                <option value="option7">June</option>
                <option value="option8">July</option>
                <option value="option9">August</option>
                <option value="option10">September</option>
                <option value="option11">October</option>
                <option value="option12">November</option>
                <option value="option13">December</option>
            </select>
            </div>
            <div className='choices'>
            <HiMiniFlag className='findIcs'/>
            <select name="" id="" className=' inOne'>
                <option value="option1">Travel Type</option>
                <option value="option2">Cultural</option>
                <option value="option3">Adventure</option>
                <option value="option4">Historical</option>
                <option value="option5">Seadside</option>
                <option value="option6">Discovery</option>
            </select>
            </div>
            <button className='findBut'>find now</button>
        </div>
    </div>
  )
}
