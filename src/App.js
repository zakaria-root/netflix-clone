import "./App.css";
import HeaderMovie from "./components/HeaderMovie/HeaderMovie";
import Row from "./components/Row/Row";
import request from "./request";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
