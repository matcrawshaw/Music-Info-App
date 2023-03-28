
import { SimpleGrid, Grid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { ArtistCard } from './artistCard';
import { SongCard } from './songCard';
import { SongCardWithHeart } from './songCardWithHeart';



function CardGrid ({currentUser}) {
  let [topArtists, setTopArtists] = useState(null);
  let [topTracks, setTopTracks] = useState(null)
  useEffect(() => {

    fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f8b32377438bdf91d564673f48fba700&format=json")
    .then((response) => response.json())
    .then((data) => {
      setTopArtists(data.artists.artist);
      console.log(data.artists.artist);
    })
    }, []);

    useEffect(() => {

      fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f8b32377438bdf91d564673f48fba700&format=json")
      .then((response) => response.json())
      .then((data) => {
        setTopTracks(data.tracks.track);
        console.log("Top Tracks");
        console.log(data.tracks.track);
      });
     }, []);

     const renderTracks = function () {
      return (
        topTracks.slice(0, 20).map((track) => {
          return (
        <SongCardWithHeart currentUser={currentUser}
        songName={track.name} 
        artistName={track.artist.name} 
        image={track.image[0]["#text"]}/>
          ); 
      })
      )
    };
    
const renderArtists = function () {
return (
  topArtists.slice(0, 20).map((band) => 
    (
      // <Grid.Col md={8} style={{maxWidth: 350}} sm={6} xs={4}> 
      <ArtistCard 
      artistName={band.name}
      playCount={band.playCount}
    image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
      //  </Grid.Col>
    )
  )
)
}


if (topArtists && topTracks) { return (
  <div>
     <Grid justify="space-around">
     <h2 style={{display: "flex", justifyContent: "start", marginLeft: 100}}>Top Artists</h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: 100}} cols={1}>
              {renderArtists()};
            </div>

    <h2 style={{display: "flex", justifyContent: "start", marginLeft: 100}}>Top Tracks</h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: 100}} cols={1}>
              {renderTracks()};
            </div>
    </Grid>
        </div>


)}


}

export default CardGrid;
