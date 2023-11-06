import React from 'react'
import Tour1 from '../assets/Tour1.jpg'
import Tour2 from '../assets/Tour2.jpg'
import Tour3 from '../assets/Tour3.jpg'
import Tour4 from '../assets/Tour4.jpg'
import {MdGroup} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const TrendingTour = () => {
    return ( 
        <>
        <div className="trendingTour">
            <div className="tourDescript">
                <h1>amazing tours</h1>
                <h3>trending, <b>best selling tours</b> and fun destinations</h3>
            </div>
            <div className="trendtourCards">
            <div className="trendtourCard">
                <img src={Tour1} alt="" />
                <div className="cardDescription">
                <div className='country'>italy</div>
                <div className="descri">
                    <p>Holiday Planners is a World Leading Online Tour Booking Platform</p>
                    <p className='descr'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
                </div>
                <div className="time-size">
                    <span className='duration'>
                    <h3><BiTimeFive className='cardcons'/>Duration</h3>
                    <p className='smallp'>2 days</p>
                    </span>
                    <span className='groupSize'>
                    <h3><MdGroup className='cardcons'/>Group Size</h3>
                    <p className='smallp'>6 People</p>
                    </span>
                </div>
                <div className="footcards">
                    <p className='price'>$1200</p>
                    <button className='butCard'><Link to='/tourDetail' className="detail">book now</Link></button>
                    </div>
                </div>
            </div>
            <div className="trendtourCard">
            <img src={Tour2} alt="" />
            <div className="cardDescription">
                <div className='country'>greece</div>
                <div className='countryGreece'>15% off</div>
                <div className="descri">
                    <p>Holiday Planners is a World Leading Online Tour Booking Platform</p>
                    <p className='descr'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
                </div>
                <div className="time-size">
                    <span className='duration'>
                    <h3><BiTimeFive className='cardcons'/>Duration</h3>
                    <p className='smallp'>6 days 3 hours</p>
                    </span>
                    <span className='groupSize'>
                    <h3><MdGroup className='cardcons'/>Group Size</h3>
                    <p className='smallp'>15+ People</p>
                    </span>
                </div>
                <div className="footcards">
                    <p className='price'>$2500</p>
                    <button className='butCard'><Link to="/tourDetail" className="detail"> book now</Link></button>
                    </div>
                </div>
            </div>
            <div className="trendtourCard">
            <img src={Tour3} alt="" />
            <div className="cardDescription">
                <div className='country country1'>jaisalmer</div>
                <div className="descri">
                    <p>Holiday Planners is a World Leading Online Tour Booking Platform</p>
                    <p className='descr'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
                </div>
                <div className="time-size">
                    <span className='duration'>
                    <h3><BiTimeFive className='cardcons'/>Duration</h3>
                    <p className='smallp'>1 days 8 hours</p>
                    </span>
                    <span className='groupSize'>
                    <h3><MdGroup className='cardcons'/>Group Size</h3>
                    <p className='smallp'>50+ People</p>
                    </span>
                </div>
                <div className="footcards">
                    <p className='price'>$750</p>
                    <button className='butCard'><Link to="/tourDetail" className="detail">book now</Link></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default TrendingTour;