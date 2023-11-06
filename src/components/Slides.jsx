import React from 'react'
import mainSlide from '../assets/mainBack1.jpg'
import Description from './Description'
import FindNow from './FindNow'

export default function Slides() {
  return (
    <div className='slides'>
      <Description />
      <FindNow />
    </div>
  )
}
