import Lion from '../../assets/lionLogo.png';
import './LionLogo.css';
import { Link } from 'react-router-dom';

export default function LionLogo() {
    return (
        <div className="root">
          <Link to="/"><img src={Lion} alt='LionLogo' /></Link>
        </div>
    );
}