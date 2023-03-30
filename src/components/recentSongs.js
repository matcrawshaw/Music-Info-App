import React from "react";
import { Button, Grid, rem } from "@mantine/core";
import { useState, useEffect } from "react";
import {SongCard} from './songCard'
import { motion } from "framer-motion"

function RecentSongs({ currentUser }) {

const recentSongs = [];


  const getArtistImage = async (artist) => {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
      const data = await response.json();

    return (data.topalbums.album[0].image[2]['#text'])
     
    }
  
    const [currentLoved, setCurrentLoved] = useState([])



  useEffect(() => {
    if (currentUser.lastFMname) {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${currentUser.lastFMname}&limit=12&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.toptracks.track);
          const recentSongsFromLast = data.toptracks.track;
         

          // console.log(data.lovedtracks.track);
          // const songsFromLast = data.lovedtracks.track;
          // console.log(data.lovedtracks.track);
          recentSongsFromLast.forEach(track => {
         recentSongs.push(track)
            });
       const recentSongsReduced = recentSongs.reduce((finalArray, current)=> {
       let obj = finalArray.find((item) => item.name === current.name)

       if (obj) {
         return finalArray
       } else {return finalArray.concat([current])}

       }, [])
          // recentSongs.concat(data.lovedtracks.track);
          setCurrentLoved(recentSongsReduced);
         
        }) 
    } 
    if (!currentUser.lastFMname) {
      setCurrentLoved(recentSongs)
    }
  
  }, [currentUser])

  if (currentLoved) return (
    <div>

<h2 style={{display: "flex", justifyContent: "center", color: "yellow"}}>Recently Listened</h2>
      <Grid justify="center" style={{justifyContent: "center", maxWidth: "85dvw"}}>
     

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

        
      
      </Grid>
    </div>
  )

  return <></>


}


export default RecentSongs;