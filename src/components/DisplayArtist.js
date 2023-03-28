import ArtistSearchCard from "./ArtistSearchCard/ArtistSearchCard";

const DisplayArtist = ({infoBio = [], infoTAlbums = []}) => {
  if (!infoBio || !infoTAlbums) {
    return;
  }
  //console.log("data-DisplayArtist-infoBio:", infoBio);
  console.log("data-DisplayArtist-infoTAlbums:", infoTAlbums);
  //console.log("----------------------DisplayArtist-data1a:", infoBio.artist.bio.content);
  console.log("----------------------DisplayArtist-data1b:", infoBio.artist.bio.links.link.href);
  //console.log("----------------------DisplayArtist-data1c:", infoTAlbums.topalbums.album[0].image[2]["#text"]);
  //console.log("----------------------DisplayArtist-data1d:", infoTAlbums.topalbums.album[0].name);
  let artist = [];
  for (let i = 0; i < infoTAlbums.topalbums.album.length; i++) {
      artist.push({id: i, nameAlbum: infoTAlbums.topalbums.album[i].name, imageAlbum: infoTAlbums.topalbums.album[i].image[2]["#text"]});
  }
  console.log("----------------------DisplayArtist-Artist:", artist);

  /**/
    //Display the data on screen. 
    return (    
      <div className="artist-wrapper">
        <h1>Biography</h1>
        <p>{infoBio.artist.bio.content}</p>
        {infoTAlbums && 
        artist.map((artAlb) => (
            <div className='artist-list'>
              <ArtistSearchCard id={artAlb.id} album={artist.nameAlbum} image={artist.imageAlbum} />
            </div>                        
          ))}
      </div>
    );
  };
  
  export default DisplayArtist;