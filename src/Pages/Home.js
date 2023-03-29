import React, { useState } from "react";
import CardGrid from "../components/cardGrid";

function HomePage ({currentUser}) {




return (
<div style={{marginLeft: 170, flexWrap: "wrap", whiteSpace: "pre-wrap"}}>
<div style={{display: "flex",justifyContent: "flex-start"}}>
{/* <Greeting/> */}
</div>

<CardGrid currentUser={currentUser}/> 
</div>
)


}
export default HomePage;

