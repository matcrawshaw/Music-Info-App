
import { SimpleGrid, Grid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { ArtistCard } from './artistCard';





function CardGrid () {
  let [topArtists, setTopArtists] = useState(null);

  useEffect(() => {

    fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f8b32377438bdf91d564673f48fba700&format=json")
    .then((response) => response.json())
    .then((data) => {
      setTopArtists(data.artists.artist);
      console.log(data.artists.artist);
    })
    }, [])
  
if (topArtists) { return (
  <div>
     <Grid justify="space-around">
      {topArtists.map((band) => 
      (
        <Grid.Col md={8} style={{maxWidth: 350}} sm={6} xs={4}> 
        <ArtistCard 
        artistName={band.name}
        playCount={band.playCount}
      image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
         </Grid.Col>
      )
    )}
    </Grid>
        </div>


)}


}

export default CardGrid;