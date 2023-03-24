import './App.css';
import NavbarSimple from './components/navbar'
import CardGrid from './components/cardGrid';
import { Button } from '@mantine/core';
import MD5 from "crypto-js/md5"

const token = window.location.search.substring(7);   

if (token) {
  const hash = MD5("api_keyf8b32377438bdf91d564673f48fba700methodauth.getSessiontoken" + token + "1a7a3c0954170c39e06a9f6c1a5d9358");

  fetch("http://ws.audioscrobbler.com/2.0/?method=auth.getSession&api_key=f8b32377438bdf91d564673f48fba700&token=" + token + "&format=json&api_sig=" + hash)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const currentUsername = data.session.name;
    const currentUserkey = data.session.key;

    console.log(currentUsername);
    console.log(currentUserkey);
  });
}

fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f8b32377438bdf91d564673f48fba700&format=json")
  .then((response) => response.json())
  .then((data) => {
    const topTracks = data;
    console.log("Top Tracks");
    console.log(topTracks);
  })

  fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f8b32377438bdf91d564673f48fba700&format=json")
  .then((response) => response.json())
  .then((data) => {
    const topArtists = data;
    console.log("Top Artists");
    console.log(topArtists);
  })

  
const getArtistImage = (artist) => {
  fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=f8b32377438bdf91d564673f48fba700&format=json")
  .then((response) => response.json())
  .then((data) => {
return (data.topalbums.album[0].image[1]['#text']) })
}



function App() {




getArtistImage("four year strong")

  return (
    <div className="App" >
 <Button
        component="a"
        rel="noopener noreferrer"
        href="https://www.last.fm/api/auth?api_key=f8b32377438bdf91d564673f48fba700&cb=http://courageous-bienenstitch-5285d5.netlify.app" >Link with LastFM</Button>

<div style={{display: "flex"}}>
<NavbarSimple/>

<div style={{display: "flex" , justifyContent: "space-between"}}>
<CardGrid/>
<CardGrid/>
</div>

</div>
    </div>
  );
}

export default App;
