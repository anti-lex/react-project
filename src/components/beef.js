import Image from '../images/beef.jpg'

const Beef = () => {
    return (
        <>
        <div className = "ListGrid">
        <div className="BeefImage">
            <img src={Image} alt="Beef"></img>
        </div>
        <h1>Beef and Broccoli Bowl</h1>
        <h2>Ingredients</h2>
        <ul>
            <li>1 ½ pounds lean ground beef or ground chuck</li>
            <li>4 garlic cloves, minced</li>
            <li>½ cup soy sauce</li>
            <li>½ cup orange juice</li>
            <li>½ cup brown sugar</li>
            <li>1 tablespoon toasted sesame oil</li>
            <li>1 tablespoons cornstarch</li>
            <li>3 cups of cooked rice</li>
            <li>3 cups steamed broccoli</li>
            <li>2 sliced green onions for garnish</li>
            <li>1 tablespoon sesame seeds for garnish</li>
        </ul>

        <h2>Instructions</h2>
        <p>Add ground beef to a skillet and cook over medium-high heat, stirring often and
        <br></br>breaking into small pieces. Drain excess grease if needed.</p>

        <p>Add garlic and stir to combine.</p>
        
        <p>In a medium sized bowl, combine soy sauce, orange juice, brown sugar, sesame oil
        <br></br>and cornstarch.</p>

        <p>Pour over ground beef, stirring to combine. Lower heat to simmer and cook 5
        <br></br>minutes.</p>

        <p>Serve over rice with broccoli and top with green onions and sesame seeds.</p>
        </div>
        </>
    )
}

export default Beef