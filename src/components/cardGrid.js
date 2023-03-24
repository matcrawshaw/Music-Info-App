import ArticleCardImage from './card';
import { SimpleGrid } from '@mantine/core';

function CardGrid () { 

          return (
            <SimpleGrid style={{display: "flex", flexDirection: "column"}} cols={1}>
              <h2 style={{display: "flex", justifyContent: "start", marginLeft: 100}}>Top Artists</h2>
              <div style={{display: "flex", flexDirection: "row", paddingLeft: 100}} cols={1}>
              <div>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div style={{marginLeft: 20}}>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div style={{marginLeft: 20}}>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div style={{marginLeft: 20}}>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div style={{marginLeft: 20}}>
                <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              </div>
            </SimpleGrid>
          )
        }

   export default CardGrid;