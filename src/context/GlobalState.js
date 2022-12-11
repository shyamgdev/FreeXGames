import { LoadingState } from "./LoadingContext";
import { GameDetailsState } from "./GameDetailsContext";
import { GameState } from "./GameContext";
import { GameSearchState } from '../context/GameSearchContext';

const GlobalState = ({ children }) => {
  return (
    <LoadingState>
      <GameState>
        <GameSearchState>
          <GameDetailsState>
            {children}
          </GameDetailsState>
        </GameSearchState>
      </GameState>
    </LoadingState>
  )
}

export default GlobalState