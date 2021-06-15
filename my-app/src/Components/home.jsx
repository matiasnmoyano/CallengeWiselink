import React, {useEffect} from 'react'
import { useHistory } from 'react-router'
import './home.css'
import Axios from 'axios'
import image from '../images/10107.jpg'

export default function Home () {
    let history= useHistory()
    localStorage.wallets=JSON.stringify([])
    function handleClick() {
        history.push("/wallets");
      }
     function getApi(){
        if(!localStorage.api){
            Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(data =>{
                localStorage.api=JSON.stringify(data.data)
            })
        }
    }
    let data=JSON.parse(localStorage.getItem('api'))
   console.log(data)
    useEffect(()=>{
        getApi()
    },[])
    return(
        <div className='container'>
            <nav className='nav'>
                <h1 className='nav-logo'>LOGO</h1>
                <section className='nav-section'>
                    <a  href='#'className='nav-link'>Inicio</a>
                    <a  href='#'className='nav-link'>¿Quienes somos?</a>
                    <a  href='wallets'className='nav-link'>Ayuda</a>
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