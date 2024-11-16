import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto whitespace-nowrap">
              {props.movies.map((movie, index) => (
                <div
                  key={movie.imdbID}
                  className="inline-block bg-gray-400 p-4 rounded-lg m-2"
                >
                  <Link to={`/movie-details/${movie.imdbID}`}>
                    {" "}
                    {/* Corrected path with hyphen */}
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="w-64 h-96 object-full"
                    />
                  </Link>
                  <h2 className="text-xl font-bold">{movie.Title}</h2>
                  <div
                    onClick={() => props.handleFavouritesClick(movie)}
                    className="overlay flex items-center justify-center"
                  >
                    <props.favouriteComponent />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
