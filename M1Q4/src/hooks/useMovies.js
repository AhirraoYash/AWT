import { useState } from "react";

const useMovies = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Inception", genre: "Sci-Fi" },
        { id: 2, title: "Interstellar", genre: "Sci-Fi" },
        { id: 3, title: "The Dark Knight", genre: "Action" },
        { id: 4, title: "Titanic", genre: "Romance" }
    ]);

    return { movies };
};

export default useMovies;
