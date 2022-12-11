import './css/Game.css';
import { useParams, Outlet } from "react-router-dom";
import useLoadingContext from '../context/LoadingContext';
import { useEffect } from 'react';

export default function Game() {
  const { id } = useParams();
  const { setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    // eslint-disable-next-line
  }, [])

  return (
    <div id="game" >
      <div id="game-container">
        <iframe title="Play Game" src={`https://html5.gamemonetize.com/${id}`} frameBorder="0" loading="lazy"></iframe>
      </div>
      <Outlet />
    </div>
  )
}
