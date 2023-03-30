import React from "react";
import { Button, Grid } from "@mantine/core";
import { useState, useEffect } from "react";
import {SongCard} from './songCard'
import { motion } from "framer-motion";

function LovedSongs({ currentUser }) {

const savedSongs = currentUser.savedSongs


  const getArtistImage = async (artist) => {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
      const data = await response.json();

    return (data.topalbums.album[0].image[2]['#text'])
     
    }
  
    const [currentLoved, setCurrentLoved] = useState([])

  useEffect(() => {
    if (currentUser.lastFMname) {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${currentUser.lastFMname}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.lovedtracks.track);
          const lovedSongsFromLast = data.lovedtracks.track;
         

          // console.log(data.lovedtracks.track);
          // const songsFromLast = data.lovedtracks.track;
          // console.log(data.lovedtracks.track);
          lovedSongsFromLast.forEach(track => {
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
  
  }, [currentUser])



  if (currentLoved) return (
    <div style={{justifyContent: "center"}}>
    

<h2 style={{display: "flex", justifyContent: "center", color: "yellow"}}>Loved Songs</h2>
      <Grid justify="center" style={{justifyContent: "center", maxWidth: "85dvw"}}>
      {/* <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} cols={1}> */}

        {currentLoved.map((song) =>
          (
            <motion.div
            whileHover={{ scale: 1.1 }}
           > 
           
           <Grid.Col style={{maxWidth: 120}}>     
          <SongCard
            key={song.mbid}
            songName={song.name}
            artistName={song.artist.name}/>
             </Grid.Col>
            </motion.div>
          )
        )}
        {/* </div> */}
      </Grid>
    </div>
  )

  return <></>


}


export default LovedSongs;