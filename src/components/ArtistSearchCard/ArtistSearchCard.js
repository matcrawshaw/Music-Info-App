import React from "react";
import "./ArtistSearchCard.css";

//Card showing image, title, GitHub link and link of deployment 
//to display images in github pages also use 'process.env.PUBLIC_URL' (no quotes) in src (before +pros.image)
// also, to display images in github pages: './react-portfolio' in src (before +pros.image)
//Previous methods failed. Now hosted on the web:
function ArtistSearchCard(props) {
  console.log("-----------------props:----------------------", props);
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.album} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.album}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ArtistSearchCard;
