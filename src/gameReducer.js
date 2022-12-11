const gameReducer = (state, action) => {

  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true
      }

    case "GAMES":
      return {
        ...state,
        games: [...action.payLoad],
        isLoading: false,
        isError: false
      }

    case "MORE_GAMES":
      return {
        ...state,
        games: [...state.games, ...action.payLoad],
        page: state.page + 1,
        isError: false
      }

    case "ERROR":
      return {
        ...state,
        isError: true
      }

    default:
      return state;
  }

}

export default gameReducer;