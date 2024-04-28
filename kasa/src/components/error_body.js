import { Link } from 'react-router-dom';
import '../style/error-body.css'

export default function ErrorBody(){
    
    return (
        <div className="error-container">
            <p className='visual'>404</p>
            <p className='error-description'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='home-link'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

