import React from 'react';
import '../style/header.css';
import logo from '../assets/LOGO.png';
import { Link, useLocation } from 'react-router-dom';


export default function Header(){
    const location = useLocation();
    const pathName = (location.pathname);
    return(
        <div className="header">
            <img src={logo} alt='Logo Kasa'></img>
            <div className='navbar'>
                <Link to="/" className= {pathName === '/' ? 'active-link-header' : ""}>Accueil</Link>
                <Link to="/a-propos" className= {pathName === '/a-propos' ? 'active-link-header' : ""}>A propos</Link>
            </div> 
        </div>
    )
}

