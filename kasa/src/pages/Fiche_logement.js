import React from 'react';
import { useParams } from 'react-router-dom';
import Tag from '../components/tag.js';
import data from '../data/logements.json'
import Dropdown from '../components/dropdown.js';
import Stars from '../components/Stars.js'
import Carousel from '../components/carousel.js'
import '../style/fiche-logement.css'


function findLogementById(logementId) {
    return data.find(logement => logement.id === logementId);
}


function ratingGenerator(rating){
    
}

function FichesLogement(){

    const  {id: logementId} = useParams();
    const logement = findLogementById(logementId);
    const equipements = logement.equipements
    const host = logement.host
    const coverPictures = logement.pictures

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
            <Carousel pictures={coverPictures} logement={logement} />
            <div className='logement-informations'>
                <div className='logement'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className='host'>
                    <p className='host-name'>
                        {host.name}
                    </p>
                    <img className = 'host-picture' src={host.picture}></img>
                </div>
            </div>
            <div className='tags-rating'>
                <div className = 'tags'>
                    {tagGenerator(logement.tags)}   
                </div>
                <div className = 'rating'>

                </div>
            </div>
            <div className='dropdowns'>
                <Dropdown className='dropdown' dropdownName = "Description" description={logement.description} />
                <Dropdown className='dropdown' dropdownName = "Équipements" description={equipement()} />
            </div>
            
        </div>
    )
}

export default FichesLogement;



