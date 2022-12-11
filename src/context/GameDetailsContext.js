import { createContext, useContext, useState } from "react";

export const GameDetailsContext = createContext();

export const GameDetailsState = ({ children }) => {
  const [details, setDetails] = useState([]);

  return (
    <GameDetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </GameDetailsContext.Provider>
  )
}

const useGameDetailsContext = () => {
  return useContext(GameDetailsContext);
}

export default useGameDetailsContext;