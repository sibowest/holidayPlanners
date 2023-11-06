import {PiQuotesBold} from 'react-icons/pi'
import {AiFillStar} from 'react-icons/ai'
const Testimonal = () => {
    return ( 
        <>
        <div className="testimonial">
            <div className="testiheader">
                <p>testimonials</p>
                <h2>customer <b>reviews</b></h2>
            </div>
            <div className="testiicon"><PiQuotesBold className="testiicoon"/></div>
            <div className="testidescript">
                <AiFillStar className='testidescriptStar'/>
                <AiFillStar className='testidescriptStar'/>
                <AiFillStar className='testidescriptStar'/>
                <AiFillStar className='testidescriptStar'/>
                <AiFillStar className='testidescriptStar'/>
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                 </p>
            </div>
        </div>
        </>
     );
}
 
export default Testimonal;