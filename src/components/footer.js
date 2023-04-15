import Navigation from "./navigation";
import React from 'react'; 
import { Icon } from "@iconify/react";
const Footer = () => {
    return (
        <div className="FooterContainer">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Icon
                icon="carbon:logo-facebook"
                width={46}
                height={46}
            />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Icon
                icon="jam:instagram"
                width={46}
                height={46}
            />
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <Icon
                icon="ant-design:twitter-square-filled"
                width={46}
                height={46}
            />
            </a>
            <Navigation/>
            
        </div>
    )
}

export default Footer;