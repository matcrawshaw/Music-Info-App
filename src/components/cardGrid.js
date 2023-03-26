import ArticleCardImage from './card';
import { SimpleGrid, Grid } from '@mantine/core';
import { useState, useEffect } from 'react';
 



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
  {topArtists.map((band) => 
      (
        <ArticleCardImage
      title={band.name}
      category="rock"
      image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
      )
    )}
        </div>
)

      }

}

export default CardGrid;