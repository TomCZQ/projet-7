import dataLogement from '../../data/logements.json';
import { Link } from 'react-router-dom';


function cardGenerator(){
    return dataLogement.map((card)=>
        
        <Link to={`/logement/${card.id}`} className='card' key={card.id}>
            <img src={card.pictures[0]} alt={card.title}></img>
            
            <h2>{card.title}</h2>
            <div className="overlay-card"></div>
        </Link>
)
}

export default function CardsLogement(){
    
    return (
        <div className='cards-container'>
            {cardGenerator()}
            
        </div>
        
    )
}

