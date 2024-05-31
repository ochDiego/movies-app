import axios from "axios"

export const getData = async () => {
    const data = await axios('http://localhost:8000/api/v1/movies');

    return data.data.data;
}