import React, { useEffect, useState } from "react";
import { getData } from "../adapter/Axio";
import "../styles/MovieRow.css";
import { imageBaseUrl } from "../environment";

const MovieRow = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);
  console.log("isLargeRow", isLargeRow);
  console.log("movie", movies);
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default MovieRow;
