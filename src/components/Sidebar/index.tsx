import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
          {items.map((item) => (
            <ListItem key={item.path} button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>

  );
};
