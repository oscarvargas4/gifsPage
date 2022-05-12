import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gif from './pages/Gif/Gif';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />}>
          <Route path=':keyword' element={<Search />} />
        </Route>
        <Route path='gif' element={<Gif />}>
          <Route path=':id' element={<Gif />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* <Route path="search" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route> */}

      </Routes>
    </Router>
  );
}

