import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  const [data, setData] = useState([]);
  try {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=23e9efd7fcc25acf48d0ae2cab434317"
      );
      const value = await response.json();
      setData(value.results);
      console.log(data);
    };
    useEffect(() => {
      fetchData();
    }, [setData]);
  } catch (error) {
    console.log("Error", error);
  }
  return (
    <div>
      <div>
        Movie
        <div>
          {data.map((items) => {
            return (
              <div key={items.id}>
                <Link to={`/moviedetails/${items.id}`}>
                  <div>{items.title}</div>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
