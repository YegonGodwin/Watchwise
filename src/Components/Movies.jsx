import React from "react";
//import "./Movies.css"; // Add a CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
function Movies() {
    const movies = [
        { id: 1, title: "Inception", genre: "Sci-Fi", poster: "https://via.placeholder.com/150" },
        { id: 2, title: "The Dark Knight", genre: "Action", poster: "https://via.placeholder.com/150" },
        { id: 3, title: "Interstellar", genre: "Adventure", poster: "https://via.placeholder.com/150" },
        { id: 4, title: "Parasite", genre: "Thriller", poster: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="movies">
            <h1>Movies</h1>
            <p>Discover a wide range of movies from different genres.</p>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster" />
                        <h2 className="movie-title">{movie.title}</h2>
                        <p className="movie-genre">{movie.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;