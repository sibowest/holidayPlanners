import React from 'react'
import zebra from '../assets/Zebra.jpg'

const MainDashCards = ({title, amount})  =>{
  return (
    <>
        <div className='card'>
            <div className="image">
                <img src={zebra} alt="" className='cardim'/>
            </div>
            <div className="dscr">
                <p className="title">{title}</p>
                <p className="title">{amount}</p>
            </div>
        </div>
    </>
  )
}

export default MainDashCards;