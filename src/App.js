import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Thrillers" fetchUrl={requests.fetchThriller} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
    </div>
  );
}

export default App;
