import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";
import CardMovie from "../cardMovie/CardMovie";

const Movies = () => {
  const { data, moviesFilter, favorite } = useContext(MovieContext);

  const moviesData = data
    ? data.map((movie) => (
        <CardMovie
          key={movie.id}
          movie={movie}
        />
      ))
    : "No data yet";

  const moviesDataFilter = moviesFilter
    ? moviesFilter.map((movie) => (
        <CardMovie
          key={movie.id}
          movie={movie}
        />
      ))
    : "No data yet";

  return <>{!favorite ? moviesData : moviesDataFilter}</>;
};
export default Movies;
