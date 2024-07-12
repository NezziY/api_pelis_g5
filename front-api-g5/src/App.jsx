import { BrowserRouter as Router, Route, Routes } from "react-router-dom/";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cuenta from "./pages/Cuenta";
import Favoritos from "./pages/Favoritos";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Recuperar from "./pages/Recuperar";
import Registro from "./pages/Registro";
import SeriesDetails from "./pages/SeriesDetails";
import Series from "./pages/Series";
import Video from "./pages/Video";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/recuperar" element={<Recuperar />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<SeriesDetails />} />
          <Route path="/video" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
