import { Typography, Button } from "@mui/material";
import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";

const Header = () => {
  const { setFavorite } = useContext(MovieContext);

  return (
    <div
      style={{
        width: "100%",
        padding: "5px 50px",
        borderBottom: "5px solid #999",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <Typography
        variant="h3"
        color="primary"
      >
        Peliculas
      </Typography>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFavorite(false)}
        >
          TODOS
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFavorite(true)}
        >
          FAVORITOS
        </Button>
      </div>
    </div>
  );
};
export default Header;
