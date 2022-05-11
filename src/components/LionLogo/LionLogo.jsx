import Lion from '../../assets/lionLogo.png';
import './LionLogo.css';

export default function LionLogo() {
    return (
        <div className="root">
            <img src={Lion} alt='LionLogo' />
        </div>
    );
}