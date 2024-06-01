import { createContext, useState, useEffect } from "react";
import { getData } from "../data/getData";
import confetti from "canvas-confetti";
import axios from "axios";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dispatchLike, setDispatchLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [isMovieCreate, setIsMovieCreate] = useState(false);
  const [isMovieDelete, setIsMovieDelete] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getData().then((movies) => setData(movies));

    setDispatchLike(false);
    setIsMovieCreate(false);
    setIsMovieDelete(false);
  }, [dispatchLike, isMovieCreate, isMovieDelete]);

  const handleLike = (movie) => {
    if (!movie.is_liked) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }

    axios
      .patch(`http://localhost:8000/api/v1/movies/${movie.id}/like`, {
        is_liked: !movie.is_liked,
      })
      .then((res) => setDispatchLike(true))
      .catch((e) => console.log(e));
  };

  const handleDelete = (id) => {
    if (confirm("¿Desea eliminar esta pelicula?")) {
      axios
        .delete(`http://localhost:8000/api/v1/movies/${id}`)
        .then((res) => setIsMovieDelete(true))
        .catch((e) => console.log(e));
    }
  };

  const moviesFilter = data.filter((movie) => movie.is_liked);

  return (
    <MovieContext.Provider
      value={{
        data,
        handleLike,
        moviesFilter,
        favorite,
        setFavorite,
        open,
        handleClose,
        handleOpen,
        setIsMovieCreate,
        handleDelete,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
