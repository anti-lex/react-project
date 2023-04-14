import Image from '../images/ramen3.png'

const Ramen = () => {
    return (
        <>
        <div className = "ListGrid">
        <div className="RamenImage">
            <img src={Image} alt="Ramen"></img>
        </div>
        <h1>Spicy Ramen</h1>
        <h2>Ingredients</h2>
        <ul>
            <li>1 teaspoon salt</li>
            <li>6 boneless skin-on chicken thighs</li>
            <li>2 teaspoons canola oil</li>
            <li>3 dried shiitake mushrooms</li>
            <li>1 leek</li>
            <li>3 tablespoons red miso</li>
            <li>3 tablespoons soy sauce</li>
            <li>5 cloes of garlic, minced</li>

        </ul>

        <h2>Instructions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <br></br>Pellentesque semper lacus sollicitudin.</p>

        <p>Phasellus fermentum, massa rutrum posuere ullamcorper,.</p>
        
        <p>Aliquam erat volutpat. Fusce eget justo rhoncus nisi tristique pretium a ut lacus
        <br></br>Mauris dui quam, ferme.</p>

        <p>Nullam magna dui, viverra vel eros at, pharetra gravida felis.
        <br></br>Maecenas porta finibus nisi vel elementum.</p>

        <p>Ut quis sagittis ipsum. Sed ut luctus ligula. Donec commodo, metus .</p>
        </div>
        </>
    )
}

export default Ramen