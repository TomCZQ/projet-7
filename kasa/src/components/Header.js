import React from 'react';
import '../style/header.css';
import logo from '../assets/LOGO.png';

export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt='Logo Kasa'></img>
            <div className='navbar'>
                <a href='../'>Accueil</a>
                <a>A Propos</a>
            </div> 
        </div>
    )
}

