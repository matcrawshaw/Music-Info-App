import { useState, useEffect, useRef } from 'react';
import DisplayArtist from '../components/DisplayArtist';
//import Search from '../components/Search';


const SearchPage = () => {
/*useRef() hook in conjunction with the useState() to access name in other sections.
  The content of the input field will now be accessible through ref. setName will be 
  used to set the state name.*/
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  // useRef 
  let nameRef = useRef();
  
  const submitButton = () => {
    //To extract the name from the input tag: (https://www.newline.co/fullstack-react/articles/using-refs-in-react/)
    setName(nameRef.current.value);
  };

  /* Fetch data from API. fetch() starts a request and returns a promise. When the request completes, the promise is 
  resolved with the Response object. If the request fails due to some network problems, the promise is rejected.
  Because the await keyword is present, the asynchronous function is paused until the request completes.  https://
  dmitripavlutin.com/javascript-fetch-async-await/#:~:text=await%20fetch('%2Fmovies',response%20object%20of%20the%20request.*/
  const fetchArtist = async () => {
    try {
    //
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6cd30188e7msh492a4fc09fc870fp1a17d5jsn46db895b6c29',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
      console.log("name:", name);
      const info = await (await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + name, options)).json();
      console.log("fetchArtist-data:", info);
      const sortInfo = info.album; //Error accessing data in object========================================ATTENTION==
      console.log("fetchArtist-sorted:", sortInfo);
     // Set data to 'data' var. Set Error to null
      setData(sortInfo);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setData(null);
      // Use of setLoading: https://rapidapi.com/guides/loading-state-react
    } finally {
      setLoading(false);
    }
  }


  /*const updateName = (name) => {
    const filtered = allData.filter(data => {
     return `${data.title.toLowerCase()} ${data.author.toLowerCase()}`.includes(name.toLowerCase());
    })
    setName(name);
    setData(filtered);
 }*/

 // Use of UseEffect: https://www.w3schools.com/react/react_useeffect.asp
  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <> { /* React fragment */}
    <div className="wrapper">
      <h2>List of Artist's Work</h2>
      {loading && <div>List of Artist's Work loading...</div>}
      {error && <div>{`Problem fetching the List of Artist's Work - ${error}`}</div>}
      <div>
            <input ref={nameRef} type="text" />
                <button type="button" onClick={submitButton}>
                    Submit
                </button>
            </div>
            
      <DisplayArtist data={data} />
    </div>
    </>
  )
}

export default SearchPage;
