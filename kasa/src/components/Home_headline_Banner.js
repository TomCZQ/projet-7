import React from 'react';

import background from '../assets/background_headlines.png';

export default function Headlines(){
    return(
        <div className="headlines-banner">
            <img src={background} alt="Paysage d'une plage"></img>
            <div className='img-overlay'></div>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

