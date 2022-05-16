import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GifDetail from './pages/GifDetail/GifDetail';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

export default function App() {

  return (
    <StaticContext.Provider value={{
      name: 'oscar',
      test: 'contextTest'
    }}>
      <GifsContextProvider>             
        <Router>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='search/:keyword' element={<Search />} />
            <Route path='gif/:id' element={<GifDetail />} />
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
      </GifsContextProvider>
    </StaticContext.Provider>
  );
}

