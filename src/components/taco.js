import Image from '../images/tacos.jpg'

const Taco = () => {
    return (
        <>
        <div className = "ListGrid">
        <div className="TacoImage">
            <img src={Image} alt="taco"></img>
        </div>
        <h1>Chicken Taco's</h1>
        <h2>Ingredients</h2>
        <ul>
            <li>2 teaspoons chili powder</li>
            <li>1 teaspoon ground cumin</li>
            <li>1 teaspoon smoked paprika</li>
            <li>1 teaspoon dried oregano</li>
            <li>½ teaspoon garlic powder</li>
            <li>Kosher salt and freshly ground black pepper, to taste</li>
            <li>1 ½ pounds boneless skinless chicken thighs</li>
            <li>1 tablespoon canola oil</li>
            <li>12 mini flour tortillas, warmed</li>
            <li>1 cup pico de gallo, homemade or store-bought</li>
            <li>1 avocado, halved, peeled, seeded and diced</li>
            <li>½ cup chopped fresh cilantro leaves</li>
            <li>1 lime, cut into wedges</li>
        </ul>

        <h2>Instructions</h2>
        <p>In a small bowl, combine chili powder, cumin, paprika, oregano, garlic powder, 
        <br></br>1 teaspoon salt and 1/2 teaspoon pepper. Season chicken with chili powder mixture.</p>

        <p>Heat canola oil in a large cast iron skillet over medium high heat. Working in
        <br></br>batches, add chicken to the skillet in a single layer and cook until golden brown
        <br></br>and cooked through, reaching an internal temperature of 165 degrees F, about 4-5
        <br></br>minutes per side. Let cool before dicing into bite-size pieces.</p>

        <p>Serve chicken in tortillas, topped with pico de gallo, avocado, cilantro and lime.</p>
        </div>
        </>
    )
}

export default Taco