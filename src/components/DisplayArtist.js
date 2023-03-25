const DisplayArtist = ({data = []}) => {

    //Display the data on screen. 
    return (    
      <div className="artist-wrapper">
        {data.album.title.map((title) => (
            <div className='artist-list'>
              <img src={data.album.cover} />
              <h4>{title}</h4>
            </div>                        
          ))}
      </div>
    );
  };
  
  export default DisplayArtist;