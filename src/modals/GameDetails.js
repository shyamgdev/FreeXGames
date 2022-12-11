import './css/GameDetails.css';
import { Link } from 'react-router-dom';
import useGameDetailsContext from '../context/GameDetailsContext';
import Modal from './Modal';

export default function GameDetails() {
  const { details } = useGameDetailsContext();
  const url = details.length !== 0 && details.url.replace('https://html5.gamemonetize.com/', '');

  return (
    details.length !== 0 &&
    <>
      <Modal>
        <div id="gameDetails">
          <div id="gameDetails-thumbnail">
            <img src={details.thumb} alt={details.title} />
          </div>
          <div id="gameDetails-details">
            <h3 id="gameDetails-title" className='line-clamp' title={details.title}>{details.title}</h3>
            <p id="gameDetails-description" title={details.description}>
              <span>Description</span><br /><br />
              {details.description}
            </p>
            <br />
            <p id="gameDetails-instructions">
              <span>Instructions</span><br /><br />
              {details.instructions}
            </p>
            <br />
            <p id="gameDetails-tags">
              <span>Tags</span><br /><br />
              {details.tags}
            </p>
          </div>
          <Link to={`/game/${url}`} id="gameDetails-play-btn-link">
            <button id="gameDetails-play-btn" title="Play">Play</button>
          </Link>
        </div>
      </Modal>
    </>
  )
}
