import { MovieContext } from "../../../context/MovieContext";
import CreateMovieModal from "../../commom/createMovieModal/CreateMovieModal";
import Header from "../../commom/header/Header";
import Movies from "../../commom/movies/Movies";
import style from "./Home.module.css";
import { Button } from "@mui/material";
import { useContext } from "react";
import Pagination from "../../commom/pagination/Pagination";
import MoviePage from "../../commom/moviePage/MoviePage";

const Home = () => {
  const { handleOpen } = useContext(MovieContext);

  return (
    <>
      <Header />

      <div style={{ padding: "5px 50px" }}>
        <Button onClick={handleOpen}>Agregar pelicula</Button>
      </div>

      <CreateMovieModal />

      <MoviePage />

      <div className={style.cardContainer}>
        <Movies />
      </div>

      <Pagination />
    </>
  );
};
export default Home;
