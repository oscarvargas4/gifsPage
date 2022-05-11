import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getGifs from '../../services/getGifs';
import Loading from '../../components/Loading';
import './Search.css';
import LionLogo from '../../components/LionLogo';

export default function Search() {
  let params = useParams();
  let keyword = params.keyword;

  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then(response => {
      setGifs(response);
      setLoading(false);
    }).catch(e => console.log(e));
  }, [keyword]);

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