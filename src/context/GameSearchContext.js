import { createContext, useContext, useEffect, useReducer } from "react";
import getApiData from '../getApiData';
import reducer from '../gameReducer';

export const GameSearchContext = createContext();

export const GameSearchState = ({ children }) => {

  const initialState = {
    games: [],
    hasMoreGames: true,
    page: 1,
    isLoading: false,
    isError: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const getGames = async (params2) => {
    dispatch({ type: "LOADING" })
    const params = `page=${state.page}&${params2}`;
    try {
      const apiData = await getApiData(params);
      if(apiData.length !== 0){
        dispatch({ type: "GAMES", payLoad: apiData })
      }
      else {
        dispatch({ type: "ERROR" });
      }
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  }

  const getMoreGames = async (params2) => {
    dispatch({ type: "LOADING" })
    const params = `page=${state.page + 1}&${params2}`;
    try {
      const apiData = await getApiData(params);
      if(apiData.length !== 0){
        dispatch({ type: "MORE_GAMES", payLoad: apiData })
      }
      else {
        dispatch({ type: "ERROR" });  
      }
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  }

  useEffect(() => {
    // getGames();
    // eslint-disable-next-line
  }, [])

  return (
    <GameSearchContext.Provider value={{ ...state, getGames, getMoreGames }}>
      {children}
    </GameSearchContext.Provider>
  )
}

const useGameSearchContext = () => {
  return useContext(GameSearchContext);
}

export default useGameSearchContext;