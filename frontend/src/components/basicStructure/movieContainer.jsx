import axios from "axios";
import Movie from "./movie";
import { useEffect, useState } from "react";
import Button from "../navbar/button";

function MovieContainer() {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const searchParam = ["Spider-Man", "Comedy", "Avengers"];

  const [movie, setMovie] = useState({});
  const [startIndex, setStartIndex] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      try {
        for (const type of searchParam) {
          const res = await axios.get(
            `http://www.omdbapi.com/?apikey=${ApiKey}&s=${type}`
          );

          const data = res.data.Search || [];
          const movieArr = data.map((el) => ({
            title: el.Title,
            image: el.Poster,
          }));

          setMovie((prev) => ({ ...prev, [type]: movieArr }));
          setStartIndex((prev) => ({ ...prev, [type]: 0 }));
        }
      } catch (err) {
        console.log("API error", err);
      }
    }
    fetchMovies();
  }, []);

  // Next button: sliding window by 1 image
  const nextHandler = (type) => {
    if (!movie[type]) return;
    const total = movie[type].length;
    const current = startIndex[type];

    // last index tak pahunchne se pehle hi next kare
    if (current + 4 < total) {
      setStartIndex((prev) => ({ ...prev, [type]: current + 1 }));
    }
    // agar last image visible ho, next nahi hoga
  };

  const getVisibleMovies = (type) => {
    if (!movie[type]) return [];
    const start = startIndex[type];
    return movie[type].slice(start, start + 4);
  };

  return (
    <>
      {Object.keys(movie).map((type) => {
        const visibleMovies = getVisibleMovies(type);

        return (
          <div key={type} className="flex flex-col text-center mb-6">
            <div className="flex flex-row justify-between mx-14 w-[92.1%] mb-2">
              <h1 className="bg-red-800 text-white w-[100%] font-bold py-2">
                {type}
              </h1>
              <Button text="Next" onClick={() => nextHandler(type)} />
            </div>

            <div className="flex flex-row flex-wrap mx-12 gap-4">
              {visibleMovies.map((el, idx) => (
                <div key={idx}>
                  <Movie title={el.title} image={el.image} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieContainer;
