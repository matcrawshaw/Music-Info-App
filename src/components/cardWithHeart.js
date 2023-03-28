import { createStyles, Paper, Text, Title, Button, rem } from '@mantine/core';
import {
  IconHeart,
  IconHeartFilled
} from '@tabler/icons-react';
import { useState } from 'react';



const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // filter:'brightness(40%)',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 800,
    color: "yellow",
    // color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: "yellow",
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}));

// interface ArticleCardImageProps {
//   image: string;
//   title: string;
//   category: string;
// }

function ArticleCardWithHeart({ image, title, category, currentUser }/*: ArticleCardImageProps*/) {
  const { classes } = useStyles();
  const [heart, setHeart] = useState(false);



  function SaveSong(song, artistName) {
  
  setHeart((prevHeart) => !prevHeart)
  const newSave = {
  name: song,
  artist: { name: artistName} } 

currentUser.savedSongs.push(newSave);
localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

  return (
    <Paper style={{width: rem(200), height: rem(200), margin: 10, alignItems: "center"}}
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="s">
          {category}
        </Text>
        <Title order={3} style={{fontSize: 20}}className={classes.title}>
          {title}
        </Title>
 
      </div>
      <a artist={category} song={title} style={{justifyContent: "center"}}onClick={() => SaveSong(title, category)} > 
      {heart ? <IconHeartFilled style={{color: "red"}}/> : <IconHeart style={{color: "red"}}/> } </a>
    </Paper>
  );
}

export default ArticleCardWithHeart;