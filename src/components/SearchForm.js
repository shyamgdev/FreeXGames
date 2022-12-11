import './css/SearchForm.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ style, collapse }) {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [expand, setExpand] = useState(!collapse || false);
  const { search } = useParams();
  const navigate = useNavigate();

  const onClickEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search=${searchValue}`)
    }
  }

  const handleBtnClick = () => {
    if (searchValue !== "") {
      navigate(`/search=${searchValue}`)
    }
  }

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!ref.current.contains(event.target)) {
  //       console.log("You clicked outside of me!");
  //     }
  //   }
  //   document.addEventListener("mouseDown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [])

  useEffect(() => {
    if (expand) {
      ref.current.focus();
    }
  }, [expand])

  useEffect(() => {
    setExpand(false);
  }, [pathname])


  return (
    <>
      <div id="searchForm" style={style} onKeyUp={onClickEnter}>
        <input ref={ref} type="text" placeholder="Search..." aria-label="Search" defaultValue={search==="search..." ? "" : search} onChange={(e) => { setSearchValue(e.target.value) }} />
        <button type="submit" aria-label="icon" onClick={handleBtnClick}>
          <SearchIcon />
        </button>
      </div>
    </>
  )
}
