import Navigation from "./navigation";
import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <div className="HeaderContainer">
            <Navigation/>
        </div>
    )
}

export default Header;