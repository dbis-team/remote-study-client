import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';

export interface INavbarProps {
  showBurgerButton?: boolean;
  showSidebar?: (show: boolean) => void;
  isSidebarShown?: boolean;
}
export const Navbar: React.FC<INavbarProps> = ({ showBurgerButton, isSidebarShown, showSidebar }) => {
  const classes = useStyles();
  
  // const [showBurger, setShowBurger] = React.useState(false);
  const handleMenuButton = () => {
    if (showSidebar) {
      return isSidebarShown ? showSidebar(false) : showSidebar(true);
    } 
  };

  return (
    <AppBar
      className={classes.root}
      position="static"
    >
      <Toolbar>
        {
            showBurgerButton
            && (
            <IconButton
              edge="start"
              className={clsx(classes.menuButton)}
              color="inherit"
              aria-label="open drawer"
              onClick={handleMenuButton}
            > 
              { isSidebarShown ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            )
          }
        <Typography className={classes.title} variant="h6" noWrap>
          Educational platform
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
