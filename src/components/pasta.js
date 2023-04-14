import Image from '../images/pasta.jpg'

const Pasta = () => {
    return (
        <>
        <div className = "ListGrid">
        <div className="PastaImage">
            <img src={Image} alt="Pasta"></img>
        </div>
        <h1>Spaghetti</h1>
        <h2>Ingredients</h2>
        <ul>
            <li>½ Tablespoon olive oil</li>
            <li>½ onion , minced</li>
            <li>2-4 cloves garlic , minced</li>
            <li>1 pound ground beef , or Italian sausage</li>
            <li>1 teaspoon Kosher salt , more to taste</li>
            <li>1 teaspoon Italian seasoning</li>
            <li>¼ teaspoon ground black pepper , or red pepper flakes</li>
            <li>1 24-ounce jar marinara or spaghetti sauce</li>
            <li>1 14-ounce can can petite diced tomatoes , drained optional</li>
            <li>1 16-ounce box spaghetti noodles</li>
        </ul>

        <h2>Instructions</h2>
        <p>In a large skillet, heat the olive oil over medium-high heat. Add the onions and cook
        <br></br>3 to 5 minutes, or until softened. Add the garlic and cook 1 minute longer. Stir in
        <br></br>ground beef, salt, pepper, and oregano. Cook until meat is browned. Drain any
        <br></br>excess grease.</p>

        <p>Stir in spaghetti sauce and diced tomatoes. Simmer uncovered 15 minutes. Season
        <br></br>to taste</p>
        
        <p>Boil spaghetti according to package instructions while sauce is simmering. Drain,
        <br></br>reserving 1 cup to add to the sauce if too thick.</p>

        <p>Spoon sauce over noodles while hot and top with fresh basil and parmesan cheese,
        <br></br>if desired, to serve.</p>
        </div>
        </>
    )
}

export default Pasta