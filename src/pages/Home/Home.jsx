import './Home.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import LionLogo from '../../components/LionLogo/index';
import { useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

const mostUsedGifs = ['Rick', 'Morty', 'Lion', 'Matrix'];

export default function Home() {
  const navigate = useNavigate();

  const [keywordSearched, setKeywordSearched] = useState('');

  const { loading, gifs } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${keywordSearched}`);
  }

  const handleChange = (event) => {
    setKeywordSearched(event.target.value);
  }

  return (
    <div className="root">
      <section className="content">
        <LionLogo />
        <h1>App</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Search a gif here" onChange={handleChange} type="text" value={keywordSearched} />
          <button>Search</button>
        </form>
        <h2>Última Búsqueda</h2>
        <ListOfGifs gifs={gifs} />
        <h2>Gifs Populares</h2>
        {
            mostUsedGifs.map((mostUsedGif, i) => <Link key={i} to={`/search/${mostUsedGif}`}>{`${mostUsedGif}`}</Link>)
        }
        <Outlet />
      </section>
    </div>
  );
}