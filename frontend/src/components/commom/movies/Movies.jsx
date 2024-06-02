import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";
import CardMovie from "../cardMovie/CardMovie";

const Movies = () => {
  const { nData, moviesFilter, favorite } = useContext(MovieContext);

  const moviesData = nData
    ? nData.map((movie) => (
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
