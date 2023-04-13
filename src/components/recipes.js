import Image from '../images/tacos.jpg'
import Image2 from '../images/beef.jpg'
import Image3 from '../images/pasta.jpg'
import Image4 from '../images/ramen3.png'
import Image5 from '../images/coleslaw3.png'
import Image6 from '../images/muffin3.png'
import { useNavigate } from 'react-router-dom'
const Recipes = () => {
    const navigate = useNavigate();
    return(
        
        <>
        <div className="Recipes">
            <div className="topLeft">
                <img src={Image} alt="tacos"onClick={(e) => {
                e.preventDefault();
                navigate("/tacos");
                }}></img>
                <h3>Chicken Tacos</h3>
                <p>Difficulty: Medium</p>
                <p>Prep Time: 1.5 Hours</p>
                <p>Cook Time: 1 hour</p>
            </div>

            <div className="topMid">
            <img src={Image2} alt="beef"></img>
            <h3>Beef Broccoli Bowl</h3>
            <p>Difficulty: Easy</p>
            <p>Prep Time: 1.5 Hours</p>
            <p>Cook Time: 1 hour</p>
            </div>

            <div className="topRight">
                <img src={Image3} alt="pasta"></img>
                <h3>Classic Spaghetti</h3>
                <p>Difficulty: Easy</p>
                <p>Prep Time: 0.5 Hours</p>
                <p>Cook Time: 1 hour</p>
            </div>

            <div className="botLeft">
                <img src={Image4} alt="ramen"></img>
                <h3>Spicy Ramen</h3>
                <p>Difficulty: Medium</p>
                <p>Prep Time: 1.5 Hours</p>
                <p>Cook Time: 1 hour</p>
            </div>

            <div className="botMid">
            <img src={Image5} alt="slaw"></img>
            <h3>Coleslaw</h3>
            <p>Difficulty: Hard</p>
            <p>Prep Time: 10 Hours</p>
            <p>Cook Time: N/A</p>
            </div>

            <div className="botRight">
                <img src={Image6} alt="muffin"></img>
                <h3>Blueberry Muffins</h3>
                <p>Difficulty: Easy</p>
                <p>Prep Time: 15 Hours</p>
                <p>Cook Time: 20 Minutes</p>
            </div>
        </div>
        </>
    )
}

export default Recipes