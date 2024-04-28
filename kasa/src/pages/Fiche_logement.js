import React from 'react';
import { useParams } from 'react-router-dom';
import Tag from '../components/tag.js';
import data from '../data/logements.json'
import Dropdown from '../components/dropdown.js';
import Stars from '../components/Stars.js'


function findLogementById(logementId) {
    return data.find(logement => logement.id === logementId);
}


function ratingGenerator(rating){
    
}

function FichesLogement(){

    const  {id: logementId} = useParams();
    console.log(logementId)
    const logement = findLogementById(logementId);
    const equipements = logement.equipements

    function tagGenerator(tags){
        const tagComponents = []; 
        for(let i = 0; i < tags.length; i++){
            tagComponents.push(<Tag key={i} tag={tags[i]} />);
        }
        return tagComponents;
    }
    
    function equipement(){
        return (
                <div>
                    {logement.equipments.map((equipment, index) => (
                        <p key={index}>{equipment}</p>
                    ))}
                </div>
        )
    }
    
    return (
        <div className="fiche-logement">
            <img className="main-picture" src={logement.cover} alt={logement.title} />
            <div>
                <div className='logement'>
                    <h1>{logement.title}</h1>
                    <p>{logement.description}</p>
                </div>
                <div>
                    <p className='host-name'>
                    </p>
                    <img className = 'host-picture'></img>
                </div>
            </div>
            <div>
                <div className = 'tags'>
                    {tagGenerator(logement.tags)}   
                </div>
                <div className = 'rating'>

                </div>
            </div>
            <Dropdown dropdownName = "Description" description={logement.description} />
            <Dropdown dropdownName = "Équipements" description={equipement()} />
            
        </div>
    )
}

export default FichesLogement;



