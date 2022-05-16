import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import './Search.css';
import LionLogo from '../../components/LionLogo';
import { useGifs } from '../../hooks/useGifs';

export default function Search() {
  let params = useParams();
  let keyword = params.keyword;

  const { loading, gifs } = useGifs({ keyword });

  return (
    <div className='root'>
      <LionLogo />
      {loading
        ? <Loading />
        : <div className='content'>
            <h1>Results: </h1>
            <ListOfGifs gifs={gifs} />
        </div>

      }
    </div>
  )
}