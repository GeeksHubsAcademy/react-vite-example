import "./style.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";
function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
          <nav>
            <Link to="/movies">Movies</Link>
            <Link to="/movie/1">Movie 1</Link>
            <Link to="/movie/2">Movie 2</Link>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:identificador" element={<Movie />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </section>
        <Routes>
          <Route path="/movies" element={<footer>movies footer</footer>} />
          <Route path="/movie/:id" element={<footer>movie footer</footer>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
