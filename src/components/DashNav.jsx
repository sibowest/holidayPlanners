import React from "react";
import {BsFillSunFill} from'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
const DashNav = () => {
    return (
        <>
        <div className="dashBoard">
            <div className="helloUser">
                <h1 className="userName">hello user!</h1>
            </div>
            <div className="interChange">
                <div className="light"><BsFillSunFill/></div>
                <h1>dark mode</h1>
                <div className="dark"><FaMoon/></div>
            </div>
      </div>
      </>
    );
}
 
export default DashNav;