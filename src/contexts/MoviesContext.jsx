import { createContext, useEffect, useState } from "react";
import getMovies from "../services/moviesAPI";
export const MoviesContext = createContext();
export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMovies().then((result) => setMovies(result));
  }, []);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}
