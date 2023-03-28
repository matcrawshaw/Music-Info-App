import { useState } from 'react';
import { createStyles, Navbar, Group, Code, getStylesRef, rem, Button } from '@mantine/core';
import {
  IconLogout,
  IconLogin,
  IconHome,
  IconSearch,
  IconMusic,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

import logo from './NoiseTrackerLogo.png';
import { NavLink, Navigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}));


function LoginOutButton({currentUser}) {
    const refresh = () => window.location.reload(true)
    const { classes, cx } = useStyles();
    const logOut = function () {
        localStorage.removeItem("currentUser");
        
        refresh();
      }

      function LogoutButton() {
        return (
            <a href="#" className={classes.link} onClick={logOut}>
          
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        )
      }
      function LoginButton() {
        return (
            <NavLink to='/' end
          className={classes.link}>
          
            <IconLogin className={classes.linkIcon} stroke={1.5} />
            <span>Login/SignUp</span>
          </NavLink>
        )
      }
     
    function currentButton() {
        if (currentUser){
            return LogoutButton()
        }
        else {return LoginButton()}
    }




return( currentButton() )

}

export default LoginOutButton; 