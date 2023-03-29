import SearchPage from './Pages/SearchPage';
import './App.css';
import NavbarSimple from './components/navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import MyMusicPage from './Pages/MyMusic';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import { LastFmAuthenticator } from './Pages/LastFmAuthenticator'
import { useEffect, useState } from 'react';
import { MantineProvider, rem } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { ThemeProvider } from '@mantine/styles';



function App() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="App">
      <BrowserRouter>
        <MantineProvider>
          <div style={{ 
            display: "flex", 
            // backgroundImage: "linear-gradient(to right, #1a2422, #4c4f42)", 
            height: "250dvh"  }}>
            <NavbarSimple currentUser={currentUser} />
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/home" element={<HomePage currentUser={currentUser} />} />
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
