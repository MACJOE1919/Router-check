import { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import AddMovies from "./components/AddMovies/AddMovies.js";
import MovieCard from "./components/MovieCard/MovieCard.js";
import MovieList from "./components/MovieList";
import Navbarr from "./components/Navbar.js";

const moviess = [
  {
    title: "BraveHeart ",
    description: "1995",
    posterURL:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/73/51/89/19209164.jpg",
    rating: "4",
  },

  {
    title: "THE IRISHMAN",
    description: "2019",
    posterURL:
      "https://fr.web.img5.acsta.net/pictures/19/09/18/09/17/1349272.jpg",
    rating: "5",
  },
  {
    title: "JOHN WICK",
    description: "2014",
    posterURL:
      "https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
    rating: "3",
  },
  {
    title: "Pursuit of HAPPYNESS",
    description: "2006",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg",
    rating: "2",
  },

  {
    title: "THE LICNOLIN LAWYER",
    description: "2011",
    posterURL:
      "https://target.scene7.com/is/image/Target/GUEST_8c328657-61a3-41ff-b716-ab726ab0bad4?wid=488&hei=488&fmt=pjpeg",
    rating: "5",
  },
  {
    title: "Un Homme en COLERE ",
    description: "2021",
    posterURL:
      "https://img.filmsactu.net/datas/films/f/a/fast-furious-hobbs-shaw/xl/fast-furious-hobbs-shaw-605cb870a84a8.jpg",
    rating: "4",
  },

  {
    title: "300",
    description: "2009",
    posterURL:
      "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/265576/264202/apiwlnbdz__39557.1625623473.jpg?c=2",
    rating: "3",
  },
];
const App = () => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);

  const [movies, setMovies] = useState(moviess);

  return (
    <div className="App">
      <Navbarr
        title={title}
        setTitle={setTitle}
        rate={rate}
        setRate={setRate}
      />
      <MovieList movies={movies} title={title} rate={rate} />
      <AddMovies movies={movies} setMovies={setMovies} />
    </div>
  );
};

export default App;
