import React from 'react';
import '../style/footer.css';
import logo from '../assets/logo_footer.png';

export default function Footer(){
    return(
        <div className="footer">
            <img src={logo} alt='Logo Kasa'></img>
            <p className='credits'>
            © 2020 Kasa. All rights reserved
            </p> 
        </div>
    )
}

