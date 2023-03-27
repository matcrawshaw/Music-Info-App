import React from "react";
import { Button } from "@mantine/core";
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
          console.log("here", data.lovedtracks.track);
        })
    }


  }, [])

  // const [currentLoved, setCurrentLoved] = useState(null);

  // useEffect(() => {


  //     fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${currentUser.lastFMname}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
  //     .then((response) => response.json())
  //     .then((data) => {

  //       setCurrentLoved(data.lovedtracks.track);
  //       console.log(currentLoved);
  //     })
  //   }, [])

  if (currentLoved) return (
    <div>
      {currentLoved.map((song) =>
      (
        <SongCard
          key={song.mbid}
          songName={song.name}
          artistName={song.artist.name}/>
      )
      )}
    </div>
  )

  return <></>


}


export default LovedSongs;