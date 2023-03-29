
import { SimpleGrid, Grid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { ArtistCard } from './artistCard';




function CardGridAllTime ({currentUser}) {
  let [composers, setComposers] = useState(null);
  let [essentialC, setEssentialC] = useState(null);
  let [worksId, setWorksId] = useState(null);
  let [id, setId] = useState(null);

  // popular composers
  useEffect(() => {

    fetch("https://api.openopus.org/composer/list/pop.json")
    .then((response) => response.json())
    .then((data) => {
      setComposers(data.composers);
      console.log("popular composers", data.composers);
    })
    }, []);

    //Essential composers
    useEffect(() => {

      fetch("https://api.openopus.org/composer/list/rec.json")
      .then((response) => response.json())
      .then((data) => {
        setEssentialC(data.composers);
        console.log("essential composers", data.composers);
      });
     }, []);

    //List popular works by composer ID
    useEffect(() => {

      fetch("https://api.openopus.org/work/list/composer" + id + "/genre/Popular.json")
      .then((response) => response.json())
      .then((data) => {
        setWorksId(data.works);
        console.log("Popular works by id:", data.works);
      });
     }, []);

     // rendering popular composers
     const renderPopComp = function () {
      return (
        composers.slice(0, 20).map((itemC) => {
          return (
        <ArtistCard
        id={itemC.id}
        compName={itemC.complete_name} 
        period={itemC.epich} 
        image={itemC.portrait} />
          ); 
      })
      )
    }

// Rendering essential composers
const renderEssenComp = function () {
return (
  essentialC.slice(0, 20).map((itemE) => 
    (
      <ArtistCard 
      id={itemE.id}
      essenName={itemE.complete_name}
      period={itemE.epich}
      image={itemE.portrait} />
    )
  )
)
}


if (composers) { return (
  <div>
     <Grid justify="space-around">
        <h2 style={{display: "flex", justifyContent: "start", marginLeft: 100}}>Popular Composers</h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: 100}} cols={1}>
              {renderPopComp()};
            </div>
    </Grid>
  </div>


)}


}

export default CardGridAllTime;
