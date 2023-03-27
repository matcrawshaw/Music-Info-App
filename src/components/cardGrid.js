import ArticleCardImage from './card';
import { SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';





function CardGrid () {

  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {

  fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
  .then((response) => response.json())
  .then((data) => {
    setTopArtists(data.artists.artist);
    console.log("Top Artists");
    console.log(topArtists);
  });
 }, []);

 useEffect(() => {

  fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f8b32377438bdf91d564673f48fba700&format=json")
  .then((response) => response.json())
  .then((data) => {
    setTopTracks(data.tracks.track);
    console.log("Top Tracks");
    console.log(topTracks);
  });
 }, []);

 const renderArtists = function () {
  return (
    topArtists.slice(0, 10).map((artist) => {
      return (
    <ArticleCardImage 
    title={artist.name.slice(0, 25)} 
    category="" 
    image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
    ); 
  })
  )
};


const renderTracks = function () {
  return (
    topTracks.slice(0, 10).map((track) => {
      return (
    <ArticleCardImage
    title={track.name.slice(0, 25)} 
    category="" 
    image={track.image[0]["#text"]}/>
      ); 
  })
  )
};



  if (topArtists) {
  return (
            <SimpleGrid style={{display: "flex", flexDirection: "column"}} cols={1}>
              <h2 style={{display: "flex", justifyContent: "start", marginLeft: 100}}>Top Artists</h2>
              <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: 100}} cols={1}>
              {renderArtists()};
              </div>
              <h2 style={{display: "flex", justifyContent: "start", marginLeft: 100}}>Top Tracks</h2>
              <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: 100}} cols={1}>
              {renderTracks()};
            </div>
              {/* <div style={{marginLeft: 20}}>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
               */}
          </SimpleGrid> 
      
          )
          } 
        }
  

   export default CardGrid;


  

