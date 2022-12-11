import './App.css';
import './variables.css';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';
import Header from './components/Header';
// import Container from './components/Container';
import GameDetails from './modals/GameDetails';
import Search from './pages/Search';
import LoadingModal from './modals/LoadingModal';
import Home from './pages/Home';
import Play from './pages/Play';

function App() {
  const { search } = useParams();

  return (
    <>
      <Routes>
        <Route exact path="/" element={
          <>
            <Header />
            <LoadingModal />
            <Outlet />
          </>
        }>
          <Route exact path="" element={
            <>
              <main>
                <Home />
              </main>
              <Outlet />
            </>
          } >
            <Route exact path="game" element={<GameDetails />} />
          </Route>
          <Route exact path="search=:search" element={
            <main>
              <Search search={search} />
            </main>
          } />
        </Route>
        <Route exact path="game/:id" element={
          <Play />
        } />
      </Routes>
    </>
  );
}

export default App;
