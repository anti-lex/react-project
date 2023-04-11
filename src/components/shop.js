import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/destinybook.png'
import Image2 from '../images/one.png'
const Shop = () => {
    return (
        <>
        <div className = "recipeGrid">
            <div className="topImage">
                <img src={Image} alt="book"></img>
            </div>
            <div className="topText">
            <h1>Destiny: The Official cookbook</h1>
            <p>Victoria Rosenthal </p>
            <h2>$34.67</h2>
            <p>Hardcover</p>
            <p>6 in stock now!</p>
            <button>Buy now!</button>
            </div>
            <div className="topImage">
                <img src={Image2} alt="book2"></img>
            </div>
            <div className="topText">
            <h1>One: Simple One-Pan Wonders</h1>
            <p>Jamie Oliver </p>
            <h2>$27.00</h2>
            <p>Hardcover</p>
            <p>18 in stock now!</p>
            <button>Buy now!</button>
            </div>
        </div>
        </>
    )
}

export default Shop;