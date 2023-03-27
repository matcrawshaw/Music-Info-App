const DisplayArtist = ({data = []}) => {
  console.log("data-DisplayArtist:", data);
  
    //Display the data on screen. 
    return (    
      <div className="artist-wrapper">
        {data && 
        data.album.title.map((title) => (
          title &&
            <div className='artist-list'>
              <img src={data.album.cover} alt="Album Pictures" />
              <h4>{title}</h4>
            </div>                        
          ))}
      </div>
    );
  };
  
  export default DisplayArtist;