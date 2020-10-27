import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from './FooterStyles'


export const Footer: React.FunctionComponent = () => {

  const classes = useStyles();

  return (
    <Box  className={classes.root}>
      <Box pb={1}>
      <BottomNavigationAction icon={<HomeIcon />} />
      </Box>
      <Typography 
        className={classes.copyright}
      >
        ©2020-2020 Andriy Antonenko, Mykyta Zviahin, Oleh Samodryha, Bondar Dmytro, Denys Krupovich
      </Typography>
    </Box>
    )
}