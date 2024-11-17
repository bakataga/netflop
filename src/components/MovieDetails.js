import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const url = `http://www.omdbapi.com/?s=Inception&apikey=6076ccbb`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(getMovieDetails);
      if (responseJson) {
        setMovie(responseJson);
      }
    };
    console.log(useEffect);
    getMovieDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {movie ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <img src={movie.Poster} alt={movie.Title} />
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {" "}
            Retour{" "}
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
