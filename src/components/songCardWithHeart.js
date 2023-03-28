import React, { useEffect, useState } from "react";
import ArticleCardWithHeart from "./cardWithHeart";




export function SongCardWithHeart({ songName, artistName, currentUser }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const updateImage = async () => {
            const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=f8b32377438bdf91d564673f48fba700&format=json`)
            const data = await response.json();

            setImageUrl(data.topalbums.album[0].image[1]['#text'])
        }

        updateImage()
    }, []);

    return (
        <ArticleCardWithHeart currentUser={currentUser}
            title={songName}
            category={artistName}
            image={imageUrl} />
    )
}