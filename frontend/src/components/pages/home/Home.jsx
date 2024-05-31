import Header from "../../commom/header/Header";
import Movies from "../../commom/movies/Movies";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />

      <div className={style.cardContainer}>
        <Movies />
      </div>
    </>
  );
};
export default Home;
