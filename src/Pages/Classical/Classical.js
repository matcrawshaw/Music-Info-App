import React, { useState } from "react";
import CardGrid from "./cardGrid";

function Classical ({currentUser}) {

return (
<div style={{display: "flex" , justifyContent: "space-between"}}>
  <h1 style={{display: "inline"}}>Hello! welcome to this bit of Classical music in NoiseTracker</h1>

  <CardGrid currentUser={currentUser}/>
</div>
)


}
export default Classical;