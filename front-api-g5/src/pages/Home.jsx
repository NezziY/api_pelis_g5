import React from "react";
import Carousel from "../components/Carousel";
import SeriesCarousel from "../components/SeriesCarousel";
import MoviesCarousel from "../components/MoviesCarousel";

function Home() {
  return (
    <div>
      <Carousel />
      <MoviesCarousel />
      <SeriesCarousel />
    </div>
  );
}

export default Home;
