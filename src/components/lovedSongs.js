import React from "react";
import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ArticleCardImage from "../components/card";



function LovedSongs() {

    let [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
  
    currentUser  = JSON.parse(localStorage.getItem("currentUser"));
        console.log(currentUser)      
      }, [])

      let [currentLoved, setCurrentLoved] = useState(null);

      useEffect(() => {
    
    
          fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${currentUser.username}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
          .then((response) => response.json())
          .then((data) => {
           
           const currentLoved = data.lovedtracks.track;
            console.log(currentLoved);
          })
        }, [])

    //   if (currentLoved)  return (
    //     <div>
    //     {topArtists.map((band) => 
    //         (
    //           <ArticleCardImage
    //         title={band.name}
    //         category="rock"
    //         image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
    //         )
    //       )}
    //           </div>
    //   )
      
            


}


export default LovedSongs;