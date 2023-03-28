const DisplayArtist = ({infoBio = [], infoTAlbums = []}) => {
  //console.log("data-DisplayArtist-infoBio:", infoBio);
  console.log("data-DisplayArtist-infoTAlbums:", infoTAlbums);
  //console.log("----------------------fetchArtist-data1a:", infoBio.artist.bio.content);
  //console.log("----------------------fetchArtist-data1b:", infoBio.artist.bio.links.link.href);
  //console.log("----------------------fetchArtist-data1c:", infoTAlbums.topalbums.album[0].image[2]["#text"]);
  console.log("----------------------fetchArtist-data1d:", infoTAlbums.topalbums.album[0].name);
  let artist = [];
  for (let i = 0; i < infoTAlbums.length; i++) {
      artist.push({nameAlbum: infoTAlbums.topalbums.album[i].name, imageAlbum: infoTAlbums.topalbums.album[i].image[2]["#text"]});
  }
  console.log("----------------------DisplayArtist-Artist:", artist);

  /*(    
      <div className="artist-wrapper">
        {infoTAlbums && 
        infoTAlbums.album.title.map((title) => (
          title &&
            <div className='artist-list'>
              <img src={infoTAlbums.album.cover} alt="Album Pictures" />
              <h4>{title}</h4>
            </div>                        
          ))}
      </div>
    );*/
    //Display the data on screen. 
    return    
  };
  
  export default DisplayArtist;