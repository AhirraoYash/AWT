import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const { movies } = useMovies();

    return (
        <div className="movie-list">
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
};

export default MovieList;
