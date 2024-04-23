import Headlines from './Home_headline_Banner'
import CardsLogement from './Cards_Logement'
import '../style/home_body.css';

export default function HomeBody(){
    
    return (
        <div className='body'>
            <Headlines/>
            <CardsLogement/>
        </div>
    )
}

