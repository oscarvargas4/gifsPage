import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListOfGifs } from './components/ListOfGifs/ListOfGifs';
import Home from './pages/Home/Home';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="search">
            <Route path=":keyword" element={<ListOfGifs />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          {/* <Route path="search" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

