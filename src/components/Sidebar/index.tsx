import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from './styles';

export interface ISidebarListItem {
  icon: React.ReactNode;
  title: string;
  path: string;
}

export interface ISidebarProps {
  showSideBar: boolean;
  items: ISidebarListItem[];
}

export const Sidebar: React.FC<ISidebarProps> = ({ showSideBar, items }) => {
  const theme = useTheme();

  const classes = useStyles();

  return (

    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={showSideBar}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box pt={8}>
        <List>
          {items.map(item => (
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary = {item.title}/>
              </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>

  );
};