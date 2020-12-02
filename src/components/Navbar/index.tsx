import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { actions as authActions } from 'store/reducers/isUserAuthenticated';
import { connect } from 'react-redux';
import { ACCESS_TOKEN } from 'constants/localStoreKeys';
import { LocalStoreService } from 'services/LocalStoreService';
import { useStyles } from './styles';

export interface INavbarProps {
  showBurgerButton?: boolean;
  showLogoutButton?: boolean;
  showSidebar?: (show: boolean) => void;
  isSidebarShown?: boolean;
  setUserAuthenticated: typeof authActions.setUserAuthenticated;
}
const UnconnectedNavbar: React.FC<INavbarProps> = ({
  setUserAuthenticated, showBurgerButton, isSidebarShown, showLogoutButton, showSidebar, 
}) => {
  const classes = useStyles();
  
  // const [showBurger, setShowBurger] = React.useState(false);
  const handleMenuButton = () => {
    if (showSidebar) {
      return isSidebarShown ? showSidebar(false) : showSidebar(true);
    } 
  };

  const handleLogoutButton = () => {
    LocalStoreService.getInstance().remove(ACCESS_TOKEN);
    setUserAuthenticated(false);
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
        {
        showLogoutButton
        && (
        <Button 
          variant="contained" 
          color="secondary"
          onClick={handleLogoutButton}
        >
          Log out
        </Button>
        )
        }
      </Toolbar>
      
    </AppBar>
  );
};

const mapDispatchToProps = {
  setUserAuthenticated: authActions.setUserAuthenticated,
};

export const Navbar = connect(null, mapDispatchToProps)(UnconnectedNavbar);
