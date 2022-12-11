import './css/GameDetails.css';
import useGameDetailsContext from '../context/GameDetailsContext';
import Modal from './Modal';
import { Link } from 'react-router-dom';

export default function GameDetails() {
  const { details } = useGameDetailsContext();
  const tags = details.tags && details.tags.split(", ");

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
              {
                tags.map((e, i) => {
                  return (
                    <Link to={`/search=${tags[i]}`} key={tags[i]}>
                      <u>{tags[i]}</u>
                    </Link>
                  )
                })
              }
            </p>
          </div>
          <a href={details.url} target="_blank" rel="noreferrer" id="gameDetails-play-btn-link">
            <button id="gameDetails-play-btn" title="Play">Play</button>
          </a>
        </div>
      </Modal>
    </>
  )
}
