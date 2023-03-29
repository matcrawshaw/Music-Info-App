import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMantineTheme } from '@mantine/core';

const useStyles = createUseStyles({
  wrapper: ({ theme }) => ({
    background: theme.colors.gray[5],
  }),
});

function YourComponent() {
  const classes = useStyles({ theme: useMantineTheme() });
  return <div className={classes.wrapper} />;
}
