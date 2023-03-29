import React, { useState } from "react";
import CardGrid from "../components/cardGrid";

function HomePage ({currentUser}) {

function UserGreeting(){
    return (
        <> 
        <h1 style={{ fontSize: 20}}>Hi, {currentUser.name}! </h1> 
        <h1 style={{ fontSize: 20}}> Welcome to </h1> 
         <h1 style={{lineHeight: .4}}>NoiseTracker</h1>
          </>)
}
function GuestGreeting(){
    return (
   <> 
   <h1 style={{fontSize: 20}}>Welcome to </h1>
    <h1 style={{fontWeight: 1, fontSize: 20}}>NoiseTracker</h1>
     </>)
}

function Greeting() {
    if (currentUser) {
return UserGreeting()
    } else {
return GuestGreeting()
    }
}


return (
<div style={{marginLeft: 150, flexWrap: "wrap", whiteSpace: "pre-wrap"}}>
<div style={{display: "flex",justifyContent: "flex-start"}}>
{/* <Greeting/> */}
</div>

<CardGrid currentUser={currentUser}/> 
</div>
)


}
export default HomePage;

