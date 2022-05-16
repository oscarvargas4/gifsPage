
import LionLogo from '../../components/LionLogo/index';
import './GifDetail.css';
import { useParams } from 'react-router-dom';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function GifDetail() {
  let params = useParams();
  let id = params.id || null;

  const gifs = useGlobalGifs();
  console.log({gifs});

  // const gif = gifs.find(singleGif => singleGif.id === params.id);
  

  return (
    <div className="GifPageContainer">
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
