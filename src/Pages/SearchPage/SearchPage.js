import React from "react";
import { useState, useRef, useEffect } from 'react';
import DisplayArtist from '../../components/DisplayArtist';
import './SearchPage.css';

function SearchPage() {
    const [data, setData] = useState([]);
    const [dataArt, setDataArt] = useState([]);
    const [input, setInput] = useState({
        name: ""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let name = input.name;
        console.log("name1:", name);
        const fetchArtist = async () => {
            try {
            
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '6cd30188e7msh492a4fc09fc870fp1a17d5jsn46db895b6c29',
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                    }
                };
                
                console.log("name2:", name);
                const info = await (await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + name, options)).json();
                setData(info);
                console.log("fetchArtist-data1:", data.data[0]);
                console.log("fetchArtist-data1a:", data.data[0].title);
                setData(data.data[0]);
                console.log("fetchArtist-data1b=1:", data);
                
                for (let i = 0; i < data.data.length; i++) {
                    dataArt.push({'name': data.data[i].artist.name, 'title':data.data[i].album.title, 'cover':data.data[i].album.cover});
                }
                setDataArt(dataArt);
                console.log("fetchArtist-data2:", dataArt);

                setDataArt(dataArt);
                
                
            } catch (err) {
                console.error(err);
            }
            
        }
        fetchArtist();
        console.log("fetchArtist-data3:", dataArt);
            
 
        
    }//----------------------end handleSubmit----------------------

     // Use of UseEffect: https://www.w3schools.com/react/react_useeffect.asp


    return (
        <>
        <div className="wrapperS">
            <form onSubmit={handleSubmit} className="boxS">
                <input name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name] : e.target.value,})} type="text" placeholder="Enter an artist to search" className="searchBox" />
                <button type="submit" className="searchButton">Search</button>
            </form>
            <h2>Searched Artist:</h2>
            <DisplayArtist data={dataArt} />
        </div>
        </>
    );
}


export default SearchPage;