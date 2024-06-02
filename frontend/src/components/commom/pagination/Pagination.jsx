import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";
import { Button } from "@mui/material";

const Pagination = () => {
  const { currentPage, setCurrentPage, nPages } = useContext(MovieContext);

  const prev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-around",
          fontSize: "30px",
        }}
      >
        <Button
          variant="outlined"
          onClick={prev}
        >
          Anterior
        </Button>

        <div
          style={{
            fontWeight: "bold",
            color: "royalblue",
          }}
        >
          {currentPage} / {nPages}
        </div>

        <Button
          variant="outlined"
          onClick={next}
        >
          Siguiente
        </Button>
      </div>
    </>
  );
};
export default Pagination;
