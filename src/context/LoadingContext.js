import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

const useLoadingContext = () => {
  return useContext(LoadingContext);
}

export default useLoadingContext;