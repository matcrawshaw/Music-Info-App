import React from "react";
import { Button, Grid } from "@mantine/core";
import { useState, useEffect } from "react";
import {SongCard} from './songCard'


function LovedSongs({ currentUser }) {

const savedSongs = currentUser.savedSongs


  const getArtistImage = async (artist) => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
      const data = await response.json();

    return (data.topalbums.album[0].image[1]['#text'])
     
    }
  
    const [currentLoved, setCurrentLoved] = useState([])



  useEffect(() => {
    if (currentUser.lastFMname) {
      fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${currentUser.lastFMname}&limit=15&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.toptracks.track);
          const recentSongsFromLast = data.toptracks.track;
         

          // console.log(data.lovedtracks.track);
          // const songsFromLast = data.lovedtracks.track;
          // console.log(data.lovedtracks.track);
          recentSongsFromLast.forEach(track => {
         savedSongs.push(track)
            });
       const SavedSongsReduced = savedSongs.reduce((finalArray, current)=> {
       let obj = finalArray.find((item) => item.name === current.name)

       if (obj) {
         return finalArray
       } else {return finalArray.concat([current])}

       }, [])
          // savedSongs.concat(data.lovedtracks.track);
          setCurrentLoved(SavedSongsReduced);
         
        }) 
    } 
    if (!currentUser.lastFMname) {
      setCurrentLoved(savedSongs)
    }
  
  }, [currentUser, currentUser.lastFMname])



  if (currentLoved) return (
    <div style={{justifyContent: "center"}}>

<h2>My Loved Songs</h2>
      <Grid justify="space-around">
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} cols={1}>

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