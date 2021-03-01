import React from 'react'
import Mela from './img/Mela.png'

const Hero = () => {
    return (
    <section className="hero">
            <div className="hero-inner-container">
                <h1>Our Mission.<span> Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita. philosophia ea usu, qui dicta sadipscing.</p>
                <button className="hero-button">Find out More!</button>
            </div>
            <div className="hero-image-container">
                <img src={Mela} className="hero-image" alt=""/>
            </div>
    </section>
    )
}

export default Hero
