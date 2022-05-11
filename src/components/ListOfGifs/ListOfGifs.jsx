import React from 'react';
import Gif from '../Gif';

export default function ListOfGifs({ gifs }) {

  return (
    <div className='gifContainer'>
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
