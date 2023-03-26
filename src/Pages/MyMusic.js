import React from "react";
import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ArticleCardImage from "../components/card";
import LovedSongs from "../components/lovedSongs";


function MyMusicPage() {

 

    return (
<>
<h2>Loved Songs</h2>
<LovedSongs/>
    </>
    )}


export default MyMusicPage;