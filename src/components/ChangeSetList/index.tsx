import React from 'react';
import List from '@material-ui/core/List';
import { useStyles } from './styles';
import { Box, ListItem } from '@material-ui/core';
import { Collapse, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export const ChangeSetList: React.FunctionComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <Box pt={30} pl={7}>
      <List className={classes.mainlist}>
        <ListItem button>
          <ListItemText primary="My schedule" />
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemText primary="Select students schedule" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem button>
                  <ListItemText primary="KM-73" />
              </ListItem>
              <ListItem button>
                  <ListItemText primary="KM-72" />
              </ListItem>
              <ListItem button>
                  <ListItemText primary="KM-71" />
              </ListItem>
            </List>
        </Collapse>
      </List>
    </Box>
  );
};
