import Navigation from "./navigation";
import React from 'react'; 
import { BsInstagram } from "react-icons/bs";
import { RiFacebookBoxFill } from "react-icons/ri"
const Footer = () => {
    return (
        <div className="FooterContainer">
            <RiFacebookBoxFill/>
            <Navigation/>
            <BsInstagram/>
        </div>
    )
}

export default Footer;