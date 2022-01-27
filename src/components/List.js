import React, { useState } from "react";
const data = [
  {
    name: "n1",
    id: "n1",
  },
  {
    name: "n2",
    id: "n2",
  },
  {
    name: "n3",
    id: "n3",
  },
  {
    name: "n4",
    id: "n4",
  },
];

const List = () => {
  const [movies, setMovies] = useState([]);
  // const fetchHandler = () => {
  //   fetch("https://swapi.dev/api/films")
  //     .then((respons) => {
  //       return respons.json();
  //     })
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // };
  async function fetchHandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        date: movie.release_date,
      };
    });
    setMovies(transformedMovies);
  }
  return (
    <React.Fragment>
      {movies.map((movie) => {
        return <p key={movie.episode_id}>{movie.title}</p>;
      })}
      <button onClick={fetchHandler}>fetch</button>
    </React.Fragment>
  );
};
export default List;
