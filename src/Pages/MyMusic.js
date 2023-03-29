import React from "react";
import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ArticleCardImage from "../components/card";
import LovedSongs from "../components/lovedSongs";
import RecentSongs from '../components/recentSongs'
import { Navigate } from "react-router-dom";

function MyMusicPage({currentUser}) {

function linkWithLastButton (currentUser) {

return(  <Button variant="gradient" gradient={{ from: 'grey', to: 'yellow' }} style={{flexWrap: "wrap"}} component="a" rel="noopener noreferrer" href={`https://www.last.fm/api/auth?api_key=f8b32377438bdf91d564673f48fba700&cb=${window.location.origin}/lastfm`}>Link with LastFM</Button>)
}

function RenderCards() {
    return ( <>
    <LovedSongs currentUser={currentUser}/>
    <RecentSongs currentUser={currentUser}/>
    </>
    )
}
function Redirect() {
    return <Navigate to='/' />
}

function LoginCheck() {
    if (currentUser) {
        return(RenderCards())
    } else {return Redirect()}
}


    return (
        <div style={{justifyContent: "center",  marginLeft: 160 }}>
            {LoginCheck()}
                {linkWithLastButton(currentUser)}
        </div>
    )
}

export default MyMusicPage;