import {
  Box, Collapse, List, ListItem, ListItemIcon, ListItemText, 
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useStyles } from './styles';

export const ChangeEducationSet: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(true);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box pt={25} pr={5}>
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Change Set" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Set 1" />
            </ListItem> 
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Set 2" />
            </ListItem> 
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Set 3" />
            </ListItem> 
          </List>
        </Collapse>
      </List>
    </Box>
  );
};
