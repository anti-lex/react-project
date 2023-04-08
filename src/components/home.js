import { useNavigate } from "react-router-dom";
import Image from '../images/tacos.jpg'
import Image2 from '../images/beef.jpg'
import Image3 from '../images/pasta.jpg'
import Image4 from '../images/destinybook.png'
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className = "leftSide">
            <h1>We also stock cookbooks!</h1>
            <p>Looking for something physical instead? No problem! <br></br>Shop for our in stock cookbooks and have them shipped <br></br>right to your door!</p>
            <button className="button"onClick={(e) => {
                e.preventDefault();
                navigate("/shop");
                }}>Shop Now!</button>
            <h2>Fan favourites</h2>
            <p>These are some of our favourites from the <br></br>past month, have some suggestion for our next <br></br> months fan favourites?? Please feel free to <br></br>contact us!</p>
        </div>
        <div className="rightSide">
            <img src={Image4} alt="book"></img>
        </div>

        <div className="bottom">
            <img src={Image} alt="tacos"></img>
            <img src={Image2} alt="beef"></img>
            <img src={Image3} alt="pasta"></img>
        </div>
        </>
    )
}

export default Home;