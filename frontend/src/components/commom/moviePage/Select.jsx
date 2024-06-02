import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";

const Select = () => {
  const { setDataQt, setCurrentPage } = useContext(MovieContext);

  const handleChange = (e) => {
    setDataQt(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <select
        name="movies"
        id="movies"
        style={{
          width: "100px",
          padding: "5px",
          borderRadius: "5px",
          fontSize: "18px",
        }}
        onChange={handleChange}
      >
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="18">18</option>
        <option value="36">36</option>
        <option value="60">60</option>
        <option value="100">100</option>
      </select>
    </>
  );
};
export default Select;
