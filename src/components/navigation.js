import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <><nav className='NavigationContainer'>
            
                    <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
                    <Link style={{textDecoration: 'none'}} to='/recipes'>View Recipes</Link>
                    <Link style={{textDecoration: 'none'}} to='/shop'>Shop</Link>
                    <Link style={{textDecoration: 'none'}} to='/about'>About</Link>
                    <Link style={{textDecoration: 'none'}} to='/contact'>Contact Us</Link>
        </nav>
        </>
    )
}

export default Navigation;