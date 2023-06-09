import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movies = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2 style={{paddingLeft:"120px"}}>{movie.Title}</h2>
      <div>
        <img
          width="400"
          height="500"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p style={{paddingLeft:"120px"}}>({movie.Year})</p>
    </div>
  );
};


export default Movies;