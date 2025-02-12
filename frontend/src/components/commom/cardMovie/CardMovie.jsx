import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";

const CardMovie = ({ movie }) => {
  const { handleLike, handleDelete } = useContext(MovieContext);

  return (
    <Card sx={{ width: 345, height: 500 }}>
      <CardHeader
        title={movie.title}
        subheader={movie.created_at}
      />
      <CardMedia
        component="img"
        height="194"
        image={movie.image_path}
        alt="Paella dish"
      />
      <CardContent sx={{ height: 150 }}>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleLike(movie)}
        >
          <FavoriteIcon color={movie.is_liked ? "error" : "disabled"} />
        </IconButton>

        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(movie.id)}
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};
export default CardMovie;
