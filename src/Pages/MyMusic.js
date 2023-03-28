import React from "react";
import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ArticleCardImage from "../components/card";
import LovedSongs from "../components/lovedSongs";


function MyMusicPage({currentUser}) {

    return (
        <div style={{display: "flex" , justifyContent: "space-between"}}>
            <h2>Loved Songs</h2>
            <LovedSongs currentUser={currentUser}/>
        </div>
    )
}

export default MyMusicPage;