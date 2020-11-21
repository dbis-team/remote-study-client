import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './styles';

export interface INavbarProps {
  showBurgerButton?: boolean;
}

export const Navbar: React.FC<INavbarProps> = ({ showBurgerButton }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {
            showBurgerButton
            && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            )
          }
          <Typography className={classes.title} variant="h6" noWrap>
            Educational platform
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
