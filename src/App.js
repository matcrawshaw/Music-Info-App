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
import LastFmAuthenticator from './Pages/LastFmAuthenticator'



function App() {
const theme = useMantineTheme();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  
  return (
    <div className="App">
      <BrowserRouter>
        <MantineProvider 
              withGlobalStyles
              withNormalizeCSS
        theme={{
          colorScheme: "dark",
          defaultGradient: {
            from: 'orange',
            to: 'red',
            deg: 45,
          }
        }}>
          <div style={{ 
            display: "flex", 
            backgroundImage: `linear-gradient(to right, #080b08, #0d715d, #4c4f42)`, 
            filter: "saturate(.96)",
            height: "250dvh"  }}>

              <div
              style={{filter: "saturate(1.03)"}} >
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
          </div>
        </MantineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
