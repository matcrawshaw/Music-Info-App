import React from "react";
import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ArticleCardImage from "../components/card";
import LovedSongs from "../components/lovedSongs";
import { Navigate } from "react-router-dom";

function MyMusicPage({currentUser}) {

function isLoggedIn() {
    return <LovedSongs currentUser={currentUser}/>
}
function isLoggedOut() {
    return <Navigate to='/' />
}

function LoginCheck() {
    if (currentUser) {
        return(isLoggedIn())
    } else {return isLoggedOut()}
}


    return (
        <div style={{display: "flex" , justifyContent: "space-between"}}>
            <h2>Loved Songs</h2>
            {LoginCheck()}
        </div>
    )
}

export default MyMusicPage;