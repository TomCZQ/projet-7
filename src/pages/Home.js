import Headlines from '../components/home/Home_headline_Banner'
import CardsLogement from '../components/home/Cards_Logement'
import background from '../assets/background_headlines.png';
import '../style/home_body.css';



export default function Home(){
    
    return (
        <div className='main'>
            <div className='body'>
                <Headlines src={background} bannerText="Chez vous, partout et ailleurs" alt="Image d'une plage" />
                <CardsLogement/>
            </div>
            
        </div>
    )
}

