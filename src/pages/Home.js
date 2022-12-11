import { useEffect } from 'react';
import Container from '../components/Container'
import useLoadingContext from '../context/LoadingContext';
import useGameContext from '../context/GameContext';

export default function Home() {
  const { setIsLoading } = useLoadingContext();
  const { games, getGames, getMoreGames, hasMoreGames } = useGameContext();

  useEffect(() => {
    if(games.length === 0) {
      getGames();
      setIsLoading(true);
    }
    else {
      setIsLoading(false);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Container data={games} getMoreData={getMoreGames} hasMoreData={hasMoreGames} />
  )
}
