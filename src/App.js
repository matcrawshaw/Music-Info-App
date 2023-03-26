import './App.css';
import NavbarSimple from './components/navbar'
import CardGrid from './components/cardGrid';
import { Button } from '@mantine/core';
import MD5 from "crypto-js/md5";
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import SearchPage from './Pages/Search';
import MyMusicPage from './Pages/MyMusic';

const token = window.location.search.substring(7);
if (token) {
  const hash = MD5(`api_keyf8b32377438bdf91d564673f48fba700methodauth.getSessiontoken${token}1a7a3c0954170c39e06a9f6c1a5d9358`);

  fetch(`http://ws.audioscrobbler.com/2.0/?method=auth.getSession&api_key=f8b32377438bdf91d564673f48fba700&token=${token}&format=json&api_sig=${hash}`)
    .then((response) => response.json())
    .then((data) => {
      let currentUser = {
      username: data.session.name,
      key: data.session.key,
      };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

    });
}

fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f8b32377438bdf91d564673f48fba700&format=json")
  .then((response) => response.json())
  .then((data) => {
    const topTracks = data;
    console.log("Top Tracks");
    console.log(topTracks);
  })


const getArtistImage = (artist) => {
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
    .then((response) => response.json())
    .then((data) => {
      return (data.topalbums.album[0].image[1]['#text'])
    })
}




function App() {






  return (
    <div className="App">

      <BrowserRouter>
        
        <div style={{ display: "flex" }}>
          <NavbarSimple />

          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/mymusic" element={<MyMusicPage />} />


          </Routes>





        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
