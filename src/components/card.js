import { createStyles, Paper, Text, Title, Button, rem } from '@mantine/core';

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
    // color: theme.white,
    color: "yellow",
    lineHeight: 1.2,
    fontSize: rem(20),
    marginTop: theme.spacing.xs,
    textAlign: "center"

  },

  category: {
    // color: theme.white,
    color: "yellow",
    opacity: 0.7,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}));

// interface ArticleCardImageProps {
//   image: string;
//   title: string;
//   category: string;
// }

function ArticleCardImage({ image, title, category }/*: ArticleCardImageProps*/) {
  const { classes } = useStyles();

  return (
    <Paper style={{width: rem(200), height: rem(200), margin: 10}}
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>

    </Paper>
  );
}

export default ArticleCardImage;