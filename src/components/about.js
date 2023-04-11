import Image from '../images/cake.png'

const About = () => {    
    return ( 
        <>
        <div className= "GridAbout">
        <div className = "LeftSide2">
        <h1>About us</h1>
        <p>Hi, thank you for wanting to know more about us, we are a <br></br>small group of passionate cooks and bakers who want to <br></br>share our creations with the world. </p>
        <p>Based in London, Ontario we started with just a simple site <br></br>with a few recipes before our site became what it was <br></br>today, with us selling cook books to help pay for the costs <br></br>of maintaining the site.</p>
        
        <h2>More about our history</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id aliquam justo. 
        <br></br>Donec consequat magna vitae mi eleifend condimentum. Curabitur tincidunt tellus sed libero rhoncus feugiat. Vestibulum eu pretium urna. Sed risus elit, congue in ipsum et, consectetur condimentum velit. Vestibulum eu hendrerit lacus. Nam placerat enim sed fringilla varius. Aenean luctus varius sodales. Nunc porta imperdiet libero, et fermentum justo porttitor id.</p>

        </div>
        <div className='RightSide2'>
        <img src={Image} alt="cake"></img>
        </div>
        </div>
        </>

    )

}

export default About;