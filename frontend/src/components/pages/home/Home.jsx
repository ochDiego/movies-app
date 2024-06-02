import { MovieContext } from "../../../context/MovieContext";
import CreateMovieModal from "../../commom/createMovieModal/CreateMovieModal";
import Header from "../../commom/header/Header";
import Movies from "../../commom/movies/Movies";
import style from "./Home.module.css";
import { Button } from "@mui/material";
import { useContext } from "react";
import Pagination from "../../commom/pagination/Pagination";

const Home = () => {
  const { handleOpen } = useContext(MovieContext);

  return (
    <>
      <Header />

      <Button onClick={handleOpen}>Agregar pelicula</Button>

      <CreateMovieModal />

      <div className={style.cardContainer}>
        <Movies />
      </div>

      <Pagination />
    </>
  );
};
export default Home;
