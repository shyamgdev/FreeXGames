import { createContext, useContext, useEffect, useReducer } from "react";
import useLoadingContext from '../context/LoadingContext';
import getApiData from '../getApiData';
import reducer from '../gameReducer';

export const GameContext = createContext();

export const GameState = ({ children }) => {
  const loadingCx = useLoadingContext();

  const initialState = {
    games: [],
    hasMoreGames: true,
    page: 1,
    isLoading: false,
    isError: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const getGames = async (type="GAMES") => {
    dispatch({ type: "LOADING" })
    try {
      const apiData = await getApiData(`page=${type === "MORE_GAMES" ? state.page + 1 : state.page}`);
      if(apiData.length !== 0){
        dispatch({ type: type, payLoad: apiData });
      }
      else {
        dispatch({ type: "ERROR" });
      }
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
    if(type !== "MORE_GAMES") {
      loadingCx.setIsLoading(false);
    }
  }

  const getMoreGames = async () => {
    getGames("MORE_GAMES")
  }

  useEffect(() => {
    // getGames();
    // eslint-disable-next-line
  }, [])

  return (
    <GameContext.Provider value={{ ...state, getGames, getMoreGames }}>
      {children}
    </GameContext.Provider>
  )
}

const useGameContext = () => {
  return useContext(GameContext);
}

export default useGameContext;