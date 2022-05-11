import React from 'react';
import { useEffect, useState } from 'react';
import Gif from '../Gif/Gif';
import getGifs from '../../services/getGifs';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

export const ListOfGifs = ({ keyword = 'morty' }) => {
  let params = useParams();
  keyword = params.keyword;

  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then(response => {
      setGifs(response);
      setLoading(false);
    }).catch(e => console.log(e));
  }, [keyword]);

  if (loading) {
    return(
      <Loading />
    )
  }

  return (
    <div>
      {
        gifs.map(({ id, title, url }) => {
          return (
            <Gif
              key={id}
              id={id}
              title={title}
              url={url}
            />
          )
        })
      }
    </div>
  )
}
