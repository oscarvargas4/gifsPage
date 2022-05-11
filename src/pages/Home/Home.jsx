import './Home.css';
import { Outlet, Link } from "react-router-dom";
import LionLogo from '../../components/LionLogo/LionLogo';

export default function Home() {

  return (
    <div className="root">
      <section className="content">
        <LionLogo />
        <h1>App</h1>
        <Link to="/search/rick">Rick</Link>
        <Link to="/search/morty">Morty</Link>
        <Link to="/search/lion">Lions</Link>
        <Outlet />
      </section>
    </div>
  );
}