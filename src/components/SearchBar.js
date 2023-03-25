import { useState, useRef } from "react";

function SearchBar(){
  var artistList = {};
  let [name, setName] = useState("Nate");
  //Usage: const refContainer = useRef(initialValue);
  //the content of the input field will now be accessible through ref
  let nameRef = useRef();
  const submitButton = () => {
      setName(nameRef.current.value);
  };

  const getArtist = async () => {
    try {
    //const searchName = name;
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6cd30188e7msh492a4fc09fc870fp1a17d5jsn46db895b6c29',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
      
      const data = await (await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + name, options)).json();
      //const dataCover = [];
      //const dataTitle = [];
      //console.log("Deezer1:", data);
      //console.log("Deezer2:", dataCover, dataTitle);
        //artistList = response;
      //})
      return (
        <div>
        {data.map(({ cover, title }) => (
        title && cover &&
        <div className='stories-list' key={title}>
          <h3><img href={cover} target="_blank" rel="noreferrer" />
        </div>                        
      ))}
        </div>
      );
    } catch (err) {console.error(err)}
  }

  getArtist();


      return (
        <div className="App">

            <div>
                <input ref={nameRef} type="text" />
                <button type="button" onClick={submitButton}>
                Submit
                </button>
            </div>
        </div>
    );
}
 

export default SearchBar;
