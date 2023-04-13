import Navigation from "./navigation";
import React from 'react'; 
import Image from '../images/logo.png'
const Header = () => {
    return (
        <div className="HeaderContainer">
            <div className="NavGrid">
            <img src={Image} alt="logo"></img>
            <Navigation/>
            </div>
        </div>
    )
}

export default Header;