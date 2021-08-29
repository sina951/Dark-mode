import React from 'react'
import './Main.css';
import Mela from './img/Mela.png'
// import Xlogo from './img/Xlogo.png'

function App() {
  // 3
  const [darkmode, setDarkmode] = React.useState(getTheme)

  // 1
  // 'dark' is key value identifier as first argument. Second value is the boolean value true/false
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkmode))
  }, [darkmode])

  // 2
  // if getCurrentTheme does not exist set it by default to false
  function getTheme() {
    const getCurrentTheme = JSON.parse(localStorage.getItem('dark'))
    return getCurrentTheme || false
  }

// <img src={Xlogo}  className="xlogo" alt=""></img>
  return (
    <div className={darkmode ? 'gif-container' : 'gif-container-light'}>
    <div className='app-container-light'>
      
      <header>
        <div className="nav-container">
          <nav>
            <h2 className={darkmode ? 'logo-text-dark' : 'logo-text'}>X'n Ace Elite</h2>

            <div className={darkmode ? 'right-menu-dark': 'right-menu'}>
              <a href="#">Who are we?</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
              <button className="btn-nav" 
                onClick={() => setDarkmode(prevMode => !prevMode)}> Darkmode
              </button>
            </div>
          </nav>
      </div>
      </header>

    <section className="hero">
      <div className="test_container"></div>
            <div className="hero-inner-container">
                <h1 className={darkmode ? 'hdark' : 'h1'}>Our Mission.<span> Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing</span></h1>
                <p className={darkmode ? 'pdark' : 'h2'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita. philosophia ea usu, qui dicta sadipscing.</p>
                <button className="btn-hero">Find out More!</button>
            </div>
            <div className="hero-image-container">
                <img src={Mela} className="hero-image" alt=""/>
            </div>
    </section>
    </div>
    </div>
  );
}

export default App;
