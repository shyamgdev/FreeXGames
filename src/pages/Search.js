import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useGameSearchContext from '../context/GameSearchContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchForm from '../components/SearchForm';
import Container from '../components/Container';

export default function Search() {
  const { search } = useParams();
  const { games, getGames, getMoreGames, hasMoreGames, isError } = useGameSearchContext();

  useEffect(() => {
    const params = `name=${search}`;
    getGames(params);
    // eslint-disable-next-line
  }, [search])

  return (
    <div id="search" style={{
      width: "100%",
      height: "100%"
    }}>
      {!useMediaQuery('(min-width:500px)') &&
        <SearchForm style={{
          width: "90%",
          height: "fit-content",
          margin: "10px auto"
        }} />
      }
      {
        isError && search !== "search..." &&
        <div style={{
          width: "fit-content",
          padding: "10px 0",
          margin: "auto",
          textAlign: "center"
        }}>
          <p>Search not found
            <br />
            Search something else
          </p>
          <br />
          <SearchForm />
        </div>
      }
      <Container title={isError && games.length !== 0 && "Recent search results"} data={games} getMoreData={() => { getMoreGames(`name=${search}`) }} hasMoreData={hasMoreGames} />
    </div>
  )
}
