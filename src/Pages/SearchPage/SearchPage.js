import React from "react";
import { useState } from 'react';
import DisplayArtist from '../../components/DisplayArtist';
import './SearchPage.css';

function SearchPage() {
    const [data, setData] = useState([]);
    const [infoBio, setInfoBio] = useState([]);
    const [infoTAlbums, setInfoTAlbums] = useState([]);
    const [input, setInput] = useState({
        name: ""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
let input = {};
        let name = input.name;

        //console.log("name1:", name);
        const fetchArtist = async () => {
            try {
            
                /*const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '6cd30188e7msh492a4fc09fc870fp1a17d5jsn46db895b6c29',
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                    }
                };
                
                
                
                const info = await (await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + name, options)).json();*/
                console.log("name2:", name);
                const infoBio = await (await fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + name + "&api_key=10791e8a46be696b595ce7ecd4c9502e&format=json")).json();
                const infoTAlbums = await (await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + name + "&api_key=10791e8a46be696b595ce7ecd4c9502e&format=json")).json();
                setInfoBio(infoBio);
                setInfoTAlbums(infoTAlbums);
                
            /*const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '6cd30188e7msh492a4fc09fc870fp1a17d5jsn46db895b6c29',
                        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                    }
                };
                fetch('https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0', options)
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(err => console.error(err));*/

                
                console.log("----------------------fetchArtist-data1a:", infoBio.artist.bio.content);
                //console.log("----------------------fetchArtist-data1b:", infoBio.artist.bio.links.link.href);
                //Private properties key can be accessed with notation: Object["key"]
                //console.log("----------------------fetchArtist-data1c:", infoTAlbums.topalbums.album[0].image[2]["#text"]);
                //console.log("----------------------fetchArtist-data1d:", infoTAlbums.topalbums.album[0].name);
               
            } catch (err) {
                console.error(err);
            }        
        }
        fetchArtist();
        console.log("------------------------fetchArtist-data2a:", infoBio.artist.bio.content);
        //console.log("------------------------fetchArtist-data2d:", infoTAlbums.topalbums.album[0].name);      
    }//----------------------end handleSubmit-------------

    return (
        <>
        <div className="wrapperS">
            <form onSubmit={handleSubmit} className="boxS">
                <input name="name" value={input.name} onSubmit={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="text" placeholder="Enter an artist to search" className="searchBox" />
                <button type="submit" className="searchButton">Search</button>
            </form>
            <h2>Searched Artist: {input.name}</h2>
            <DisplayArtist infoBio={infoBio} infoTAlbums={infoTAlbums} />
        </div>
        </>
    );
}


export default SearchPage;