import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function ShowMovie(movie) {
    return (
        <div key={movie.id}>
            <h2><Link to={`movie_detail/${movie.id}`}>{movie.title}</Link> ({movie.rating})</h2>
            <img src={movie.medium_cover_image} alt={movie.title + 'image'}/>
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    )
}

function ShowMovies( {movies} ) {
    return (
        <div>
            <h1>The Movies ({movies.length})</h1>
            {movies.map(ShowMovie)}
        </div>
    );
}

function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {getMovies();}, [])
    return(
        <div>
            {loading ? <strong>Loading...</strong> : <ShowMovies movies={movies}/>}
        </div>
    )
}

export default MovieApp;