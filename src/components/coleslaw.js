import Image from '../images/coleslaw3.png'

const Slaw = () => {
    return (
        <>
        <div className = "ListGrid">
        <div className="ColeslawImage">
            <img src={Image} alt="Coleslaw"></img>
        </div>
        <h1>Coleslaw</h1>
        <h2>Ingredients</h2>
        <ul>
            <li>¾ cup mayonnaise</li>
            <li>2 tablespoons Dijon mustard</li>
            <li>1 tablespoon lemon juice</li>
            <li>2 tablespoons apple cider vinegar</li>
            <li>2 tablespoons sugar</li>
            <li>2 cups green cabbage, core removed and thinly sliced</li>
            <li>2 cups red cabbage, core removed and thinly sliced</li>
            <li>¾ cup carrots, peeled and julienned</li>
            <li>½ red onion, finely chopped</li>
            <li>Salt and pepperh</li>
        </ul>

        <h2>Instructions</h2>
        <p>Whisk together the mayonnaise, Dijon mustard, lemon juice, apple
        <br></br>cider vinegar, celery salt, and sugar in a small bowl. Combine the cab-
        <br></br>bages, carrot, and red onion in a large bowl. Toss in the dressing, and fully
        <br></br>coat the vegetables. Cover and place in the refrigerator overnight. Add
        <br></br>salt and pepper to taste.
        </p>
        </div>
        </>
    )
}

export default Slaw