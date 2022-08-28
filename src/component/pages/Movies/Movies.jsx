import { useContext } from "react";
import "./Movies.css";
import { MoviesContext } from "../../../contexts/MoviesContext";
import MovieCard from "../../features/MovieCard/MovieCard";
function Movies() {
  const { movies, setMovies } = useContext(MoviesContext);
  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="movie_cards">
        {movies?.map((movie) => (
          <MovieCard details={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
