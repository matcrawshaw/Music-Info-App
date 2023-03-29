import React from "react";
import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ArticleCardImage from "../components/card";
import LovedSongs from "../components/lovedSongs";
import { Navigate } from "react-router-dom";

function MyMusicPage({currentUser}) {

function RenderLoved() {
    return <LovedSongs currentUser={currentUser}/>
}
function Redirect() {
    return <Navigate to='/' />
}

function LoginCheck() {
    if (currentUser) {
        return(RenderLoved())
    } else {return Redirect()}
}


    return (
        <div style={{display: "flex" , justifyContent: "center",  marginLeft: 160 }}>
            {LoginCheck()}
        </div>
    )
}

export default MyMusicPage;