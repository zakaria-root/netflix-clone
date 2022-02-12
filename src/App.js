import { useState } from "react";
import "./App.css";
import HeaderMovie from "./components/Banner/Banner";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import request from "./request";

function App() {

  const [user, setUser] = useState('')
  
  return user ? (
    <div className="App">
      <Nav />
      <HeaderMovie fetchURL={request.fetchNetflixOriginals} />
      <Row title="NETFLIX ORIGINAL" fetchURL={request.fetchNetflixOriginals} largMovies={true} />
      <Row title="Trending now" fetchURL={request.fetchTrending} />
      <Row title="Top reader" fetchURL={request.fetchTopReader} />
      <Row title="Action" fetchURL={request.fetchActionMovies} />
      <Row title="Romence" fetchURL={request.fetchRomanceMovies} />
      <Row title="Comedy" fetchURL={request.fetchComedyMovies} />
      <Row title="Horrordiscover" fetchURL={request.fetchHorrorMovies} />
      <Row title="Docemtaries" fetchURL={request.fetchDocumentaries} />
      
    </div>
  ) : (<Login />)
}

export default App;
