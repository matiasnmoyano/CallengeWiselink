import React, { useState, useEffect } from 'react'
import {Modal, TextField, Button, useTheme} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import image from '../images/Group4.png'
import image1 from '../images/Group8.png'
import './wallets.css'
import Wallet from './wallet.jsx'
import { StylesContext } from '@material-ui/styles'
const useStyles=makeStyles((theme) =>({
    modal:{
        position:'absolute',
        width: 400,
        backgroundColor:'white',
        border: '2px solid #000',
        padding:'16px 32px 24px',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
    },
    textfield:{
        width:'100%'
    }
}))
export default function Wallets(){
const [modal, setModal]=useState(false)
const [name,setName] = useState('')
const styles= useStyles()
let walletss=[]
function local(){
    if(localStorage.wallets){
        JSON.parse(localStorage.getItem('wallets')).map(w =>{
            walletss.push(w)
        })
    }
}
if(localStorage.wallets){
    localStorage.getItem('wallets')
}
useEffect(()=>{
    local()
},[])
console.log(localStorage.getItem('wallets'))
function NewWallet (name) {
   localStorage.removeItem('wallets')
    var newWallet={
        name:name,
        value:0,
        coins:[]
    }
    walletss.push(newWallet)
    localStorage.wallets=walletss
    setModal(!modal)
}  
function OpenClose () {
    setModal(!modal)
}
function OnChange (e){
    setName(e.target.value)
}
console.log(name)
const add=(
    <div className={styles.modal}>
        <div align='center'>
            <h2>Nueva Billetera</h2>
        </div>
    <TextField label='Nombre' onChange={OnChange} className={styles.textfield}/>
    <br/>
    <div align='right'>
    <Button color='primary' onClick={NewWallet}>Enviar</Button>
    <Button onClick={OpenClose}>Cancelar</Button>
    </div>
    
    </div>
)
    return(
        <div>
        <div className='color'>
            <nav className='nav1'>
                <h1 className='nav-logo'>LOGO</h1>
                <section className='nav-section'>
                    <a  href='#'className='nav-link'>Inicio</a>
                    <a  href='#'className='nav-link'>¿Quienes somos?</a>
                    <a  href='#'className='nav-link'>Ayuda</a>
                    <a  href='#'className='nav-link'>Contacto</a>
                </section>
            </nav>   
            <div className='header'>
                <figure>
                    <img  className='graphic'src={image} alt="image2" />
                </figure>
                <div>
                    <h3 className='title'>Dinero Disponible</h3>
                    <h1 className='diner'>$15.385.28</h1>
                    <h3 className='title'>Cantidad de activos</h3>
                    <h1 className='active'>5</h1>
                </div>
                <figure>
                <img className='graphic2.ti'src={image1} alt="image2" />
                </figure>
            </div>
        </div>
        <button onClick={OpenClose}>Crear Billetera</button>
        <Modal 
         open={modal}
         onClose={OpenClose}>
             {add}
        </Modal>
        </div>
    )
}