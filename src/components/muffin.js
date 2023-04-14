import Image from '../images/muffin3.png'

const Muffin = () => {
    return (
        <>
        <div className = "ListGrid">
        <div className="BeefImage">
            <img src={Image} alt="Beef"></img>
        </div>
        <h1>Blueberry Muffin's</h1>
        <h2>Ingredients</h2>
        <ul>
            <li>1 ½ cups all-purpose flour</li>
            <li>¾ cup white sugar</li>
            <li>2 teaspoons baking powder</li>
            <li>½ teaspoon salt</li>
            <li>⅓ cup vegetable oil</li>
            <li>1 egg</li>
            <li>1 tablespoons cornstarch</li>
            <li>⅓ cup milk, or more as needed</li>
            <li>1 cup fresh blueberries</li>
            <li>½ cup white sugar</li>
            <li>⅓ cup all-purpose flour</li>
            <li>¼ cup butter, cubed</li>
            <li>1 ½ teaspoons ground cinnamon</li>
        </ul>

        <h2>Instructions</h2>
        <p>Preheat the oven to 400 degrees F 200 degrees C. Grease 8 muffin cups or line
        <br></br>with paper liners.</p>

        <p>For the muffins: Whisk flour, sugar, baking powder, and salt together in a large
        <br></br>bowl.</p>
        
        <p>Pour oil into a small liquid measuring cup. Add egg and enough milk to reach
        <br></br>the 1-cup mark; stir until combined. Pour into flour mixture and mix just until.
        <br></br>batter is combined. Fold in blueberries; set batter aside.</p>

        <p>For the crumb topping: Combine sugar, flour, butter, and cinnamon in a small
        <br></br>bowl. Mix with a fork until crumbly.</p>

        <p>Spoon batter into the prepared muffin cups, filling right to the top. Sprinkle with
        <br></br>crumb topping.</p>

        <p>Bake in the preheated oven until a toothpick inserted in the center of a muffin
        <br></br>omes out clean, 20 to 25 minutes.</p>
        </div>
        </>
    )
}

export default Muffin