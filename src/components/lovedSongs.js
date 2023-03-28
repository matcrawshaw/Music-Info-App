import React from "react";
import { Button, Grid } from "@mantine/core";
import { useState, useEffect } from "react";
import {SongCard} from './songCard'


function LovedSongs({ currentUser }) {


  const getArtistImage = async (artist) => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
      const data = await response.json();

    return (data.topalbums.album[0].image[1]['#text'])
     
    }
  
    const [currentLoved, setCurrentLoved] = useState([])



  useEffect(() => {
    if (currentUser.lastFMname) {
      fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${currentUser.lastFMname}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
        .then((response) => response.json())
        .then((data) => {

          setCurrentLoved(data.lovedtracks.track);
         
        }) 
    } 
    if (!currentUser.lastFMname) {
      setCurrentLoved([])
    }
  
  }, [])



  if (currentLoved) return (
    <div>
      <Grid justify="space-around">
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: 100}} cols={1}>
        {currentLoved.map((song) =>
          (
          <SongCard
            key={song.mbid}
            songName={song.name}
            artistName={song.artist.name}/>
          )
        )}
        </div>
      </Grid>
    </div>
  )

  return <></>


}


export default LovedSongs;