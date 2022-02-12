import React from 'react'
import request from '../../request'
import HeaderMovie from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Row from '../Row/Row'
import './Home.css'

function Home() {
  return (
    <div className='home' >
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
  )
}

export default Home
