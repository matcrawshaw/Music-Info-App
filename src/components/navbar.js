import { useState } from 'react';
import { createStyles, Navbar, Group, Code, getStylesRef, rem, Button } from '@mantine/core';
import {
  IconLogout,
  IconHome,
  IconSearch,
  IconMusic,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

import logo from './NoiseTrackerLogo.png';
import { NavLink } from 'react-router-dom';

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







function NavbarSimple({currentUser}) {



  const data = [
    { link: '', to: '/', label: 'Sign-Up / Log-In', icon: IconHome },
    { link: '', to: '/home', label: 'Home', icon: IconHome },
    // { link: '', to: '/search', label: 'Search', icon: IconSearch },
    { link: '', to: '/mymusic', label: 'My Music', icon: IconMusic },
  ];

  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <NavLink
      to={item.to}
      end
      className={({ isActive }) => cx(classes.link, { [classes.linkActive]: isActive })}
      key={item.label}

    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
  ));

  const logOut = function () {
    localStorage.removeItem("currentUser");
  }

  return (
    <Navbar height={700} width={{ sm: 240 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <a component="a" href="/"><img style={{ width: 100, height: 100, borderRadius: "50%" }} src={logo} alt="logo" /></a>
        </Group>
        {links}
      </Navbar.Section>
      <Button component="a" rel="noopener noreferrer" href={`https://www.last.fm/api/auth?api_key=f8b32377438bdf91d564673f48fba700&cb=${window.location.origin}/lastfm`}>Link with LastFM</Button>
      <Navbar.Section className={classes.footer}>
        
        <a href="#" className={classes.link} onClick={logOut}>
          
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
export default NavbarSimple