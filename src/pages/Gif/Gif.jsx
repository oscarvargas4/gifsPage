
import LionLogo from '../../components/LionLogo/index';
import './Gif.css';
import { useParams } from 'react-router-dom';

export default function Gif() {
  let params = useParams();
  let id = params.id || null;
  
  return (
    <div className="root">
      <section className="content">
        <LionLogo />
        {id
          ? <div>{id}</div>
          : <div>Please Search By Id</div>
        }
      </section>
    </div>
  )
}
