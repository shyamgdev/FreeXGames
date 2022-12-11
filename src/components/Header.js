import './css/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import SearchForm from './SearchForm';

export default function Header() {
  const navigate = useNavigate();
  const mediaQuery = useMediaQuery('(min-width:500px)');

  return (
    <header id="header">
      <nav>
        <div id="header-left">
          <Link to="/" id="navbar-brand">
            <img className="brand-logo" title="logo" src='logo/logo512.webp' alt="logo" loading="lazy" />
            <h1 className="brand-name">FreeXGames</h1>
          </Link>
        </div>
        {/* <div id="header-center">
          <ul id="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Categories</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">My games</Link>
            </li>
          </ul>
        </div> */}
        <div id="header-right">
          {
            mediaQuery ?
              <SearchForm />
              : <SearchIcon style={{cursor: "pointer"}} onClick={()=>{navigate('/search=search...')}} />
          }
        </div>
      </nav>
    </header>
  )
}
