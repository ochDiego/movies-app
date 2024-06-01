import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";
import { TextField } from "@mui/material";
import axios from "axios";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateMovieModal = () => {
  const { open, handleClose, setIsMovieCreate } = useContext(MovieContext);

  const initialValues = {
    title: "",
    description: "",
    created_at: "",
    image_path: "",
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/api/v1/movies", {
        title: data.title,
        description: data.description,
        created_at: data.created_at,
        image_path: data.image_path,
      })
      .then((res) => {
        setIsMovieCreate(true);
        handleClose();
      })
      .catch((e) => console.log(e));
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      title: Yup.string()
        .required("El titulo es requerido")
        .min(3, "Minimo tres caracteres"),
      description: Yup.string()
        .required("La descripción es requerida")
        .min(3, "Minimo tres caracteres"),
      created_at: Yup.string()
        .required("La fecha de estreno es requerida")
        .min(3, "Minimo tres caracteres"),
      image_path: Yup.string()
        .required("La imagen es requerida")
        .min(3, "Minimo tres caracteres"),
    }),
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            style={{
              minHeight: "400px",
              padding: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Typography
              variant="h6"
              color="primary"
            >
              Agregar nueva pelicula
            </Typography>

            <TextField
              id="outlined-basic"
              label="Ingrese el titulo"
              variant="outlined"
              fullWidth
              name="title"
              onChange={handleChange}
              value={values.title}
              error={errors.title}
              helperText={errors.title}
            />

            <TextField
              id="outlined-basic"
              label="Ingrese la descripción"
              variant="outlined"
              fullWidth
              name="description"
              onChange={handleChange}
              value={values.description}
              error={errors.description}
              helperText={errors.description}
            />

            <TextField
              id="outlined-basic"
              label="Ingrese la fecha de estreno"
              variant="outlined"
              fullWidth
              name="created_at"
              onChange={handleChange}
              value={values.created_at}
              error={errors.created_at}
              helperText={errors.created_at}
            />

            <TextField
              id="outlined-basic"
              label="Ingrese la url de la imagen"
              variant="outlined"
              fullWidth
              name="image_path"
              onChange={handleChange}
              value={values.image_path}
              error={errors.image_path}
              helperText={errors.image_path}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Agregar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default CreateMovieModal;
