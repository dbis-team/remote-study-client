import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 'auto',
    background: '#daddf1'
  },
  icon: {
    paddingBottom:'0.9rem',

  },
  copyright: {
    paddingTop:'1.2rem',
    color: '#3f51b5'
  }
});


export const Footer: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <BottomNavigation  className={classes.root}>
      <BottomNavigationAction  className={classes.icon} icon={<HomeIcon />} />
      <Typography 
        className={classes.copyright}
      >
        ©2020-2020 Andriy Antonenko, Mykyta Zviahin, Oleh Samodryha, Bondar Dmytro, Denys Krupovich
      </Typography>
    </BottomNavigation>
    )
}