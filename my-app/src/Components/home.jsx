import React from 'react'
import { useHistory } from 'react-router'
import './home.css'
import image from '../images/10107.jpg'
export default function Home () {
    let history= useHistory()
    function handleClick() {
        history.push("/wallets");
      }
    return(
        <div className='container'>
            <nav className='nav'>
                <h1 className='nav-logo'>LOGO</h1>
                <section className='nav-section'>
                    <a  href='#'className='nav-link'>Inicio</a>
                    <a  href='#'className='nav-link'>¿Quienes somos?</a>
                    <a  href='#'className='nav-link'>Ayuda</a>
                    <a  href='#'className='nav-link'>Contacto</a>
                </section>
            </nav>
            <div className='home'>
                <div className='home-info'>
                    <h2 className='home-title'>Tu nueva billetera digital</h2>
                    <h3 className='home-subtitle'>El dinero seguro y al alcance de tus manos</h3>
                    <button onClick={handleClick} className='btn'>Mis Billeteras</button>
                </div>
                <figure>
                    <img className='home-image'src={image} alt="image" />
                </figure>
            </div>            
        </div>
    )
}