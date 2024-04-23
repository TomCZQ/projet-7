import dataLogement from '../data/logements.json'

function cardGenerator(){
    return dataLogement.map((card)=>
        <a href='#' key={card.id} className="card">
            <img src={card.pictures[0]} alt={card.title}></img>
            <h2>{card.title}</h2>
        </a>
)
}

export default function CardsLogement(){
    
    return (
        <div className='cards-container'>
            {cardGenerator()};
        </div>
    )
}

