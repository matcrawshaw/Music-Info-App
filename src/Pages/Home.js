import React, { useState } from "react";
import CardGrid from "../components/cardGrid";

function HomePage ({currentUser}) {

function UserGreeting(){
    return <h1 style={{display: "inline"}}>Hi {currentUser.name}! welcome to NoiseTracker</h1>
}
function GuestGreeting(){
    return <h1 style={{display: "inline"}}>Hi, welcome to NoiseTracker</h1>
}

function Greeting() {
    if (currentUser) {
return UserGreeting()
    } else {
return GuestGreeting()
    }
}


return (
<div style={{display: "flex" , justifyContent: "space-between"}}>

<Greeting/>
<CardGrid/>
</div>
)


}
export default HomePage;

