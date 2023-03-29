import React from "react";
import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ArticleCardImage from "../components/card";
import LovedSongs from "../components/lovedSongs";
import RecentSongs from '../components/recentSongs'
import { Navigate } from "react-router-dom";

function MyMusicPage({currentUser}) {

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
        </div>
    )
}

export default MyMusicPage;