import './Home.css';
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import LionLogo from '../../components/LionLogo/LionLogo';
import { useState } from 'react';

const mostUsedGifs = ['Rick', 'Morty', 'Lion', 'Matrix'];

export default function Home() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${keyword}`);
  }

  const handleChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <div className="root">
      <section className="content">
        <LionLogo />
        <h1>App</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Search a gif here" onChange={handleChange} type="text" value={keyword} />
          <button>Search</button>
        </form>
        <h2>Gifs Populares</h2>
        {
            mostUsedGifs.map((mostUsedGif, i) => <Link key={i} to={`/search/${mostUsedGif}`}>{`${mostUsedGif}`}</Link>)
        }
        <Outlet />
      </section>
    </div>
  );
}