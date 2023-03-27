import SearchPage from './Pages/SearchPage/SearchPage';
import './App.css';
import NavbarSimple from './components/navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import MyMusicPage from './Pages/MyMusic';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import { LastFmAuthenticator } from './Pages/LastFmAuthenticator'
import { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f8b32377438bdf91d564673f48fba700&format=json")
  .then((response) => response.json())
  .then((data) => {
    const topTracks = data;
    // console.log("Top Tracks");
    // console.log(topTracks);
  })


function App() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));



  return (
    <div className="App">
      <BrowserRouter>
        <MantineProvider>
          <div style={{ display: "flex" }}>
            <NavbarSimple />
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/mymusic" element={<MyMusicPage currentUser={currentUser} />} />
              <Route path='/lastfm' element={<LastFmAuthenticator />} />
            </Routes>
          </div>
        </MantineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
