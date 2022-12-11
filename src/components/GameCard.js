import './css/GameCard.css';
import { Link } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import useGameDetailsContext from '../context/GameDetailsContext';

export default function GameCard(props) {
  const { setDetails } = useGameDetailsContext();
  // const url = props.url.replace('https://html5.gamemonetize.com/', '');

  const handleOnClick = () => {
    setDetails(props);
  }

  return (
    <div className="gameCard" onClick={handleOnClick}>
      <Link to='/game' className="gameCard-thumbnail">
        <img src={props.thumb} alt={props.title} loading="lazy" />
      </Link>
      <div className="gameCard-details">
        <Link to='/game' className="gameCard-details-left">
          <h3 className="gameCard-title line-clamp" title={props.title}>{props.title}</h3>
          <h4 className="gameCard-category line-clamp" title={props.category}>{props.category}</h4>
        </Link>
        <div className="gameCard-details-right">
          <a href={props.url} target="_blank" rel="noreferrer" className="gameCard">
            <button className="gameCard-btn" title="Play" aria-label="Play"><PlayCircleIcon /></button>
          </a>
        </div>
      </div>
    </div>
  )
}