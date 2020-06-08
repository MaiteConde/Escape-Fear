import React, { Fragment } from 'react'
import './About.scss'

const About = () => {
    return (
        <Fragment>
            <div className="head">
            <h2>Get to know us</h2>
            </div>

        <div className="game">
        <div><img src="https://images.wallpaperscraft.com/image/autumn_forest_aerial_view_129461_3840x2400.jpg" alt=""/></div>

            <div>
            <h2>About the game</h2>
            <p>Looking to break out from your daily commitments and responsibilities? Escape your routine and get immersed into one of our immersive games. Escape rooms are fun live entertainment experiences that captivate you into a story and make you forget about the real world. Use your teamwork, logical deduction and communication skills to solve the puzzles and unravel the story within. Each game consists of unique narratives and challenges that will test your team in a fun and memorable way. Every element inside the game carries a purpose and meaning so pay attention to detail and view your surroundings with more curiosity and wonder. We have one escape for day (you can choose between different hours), so hurry up and choose yours!</p>
            </div>
        </div>
        <div className="forMe">
            <div>
            <h2>What's in it for me?</h2>
            <p>Our games have been designed with challenges that will bring out your creative side and outside the box thinking; a strong compelling story that evolves through the experience; and a game design that will strengthen your family and friendship bonds. What is there not to like? And let’s be honest, we all know that you are the smartest one of the group so it’s also a good way to show off your skills! Whether you are looking for something different to do, like to take on new challenges or simply want to show-off your skills and wits to your friends while working as a team, you will definitely have a fun and exciting experience playing our escape rooms.</p>
            </div>
            <div><img src="https://i.pinimg.com/originals/8f/50/0c/8f500c0cb41c65c917d25e5dfc955696.jpg" alt=""/></div>

        </div>

        <div className="why">
            <div><img src="https://wallpaperaccess.com/full/1413686.jpg" alt=""/></div>
            <div>
            <h2>Why us</h2>
            <p>Being escape room enthusiasts ourselves, at Archimedes Inspiration – AI Escape, we aim to provide unique and high quality escape games. We have carefully designed our rooms with a focus on technology, immersion and games with a meaning and strong storylines. Not limited to the idea “escaping” as the end goal, our games have been created for you to discover the plot within. Each of our quests have been developed from inception to built with love and high attention to detail to ensure that each puzzle is relevant and tests a different skill set. Instead of being a race against the clock to solve as many challenges as possible, due to the strong focus on narratives, our games are designed to be enjoyed thoughtfully and with time.</p>
            </div>
        </div>

        </Fragment>
    )
}

export default About;