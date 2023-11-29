import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "10b2a75d0c5d29a93d009c31e8d01a78";

export default function Movie() {
  const { identificador } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = `Movie ${identificador}`;

    fetch(
      `https://api.themoviedb.org/3/movie/${identificador}?api_key=${API_KEY}`,
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.error(response);
          throw new Error("algo no funcionó");
        }
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [identificador]);
  return (
    <div>
      <h1>Movie {identificador}</h1>
      <section>
        {data && (
          <div>
            <h2>title: {data.title}</h2>
            <p>overview: {data.overview}</p>
          </div>
        )}

        {error && <p>{error}</p>}

        {!data && !error && <p>Loading...</p>}
      </section>
    </div>
  );
}
