import React from 'react';
import Typography from '@material-ui/core/Typography';

import {
  Divider, ListItem, ListItemText, List, Box, 
} from '@material-ui/core';
import { useStyles } from './styles';

export const Feed: React.FunctionComponent = () => {
  const classes = useStyles();
  
  return (
    <Box pt={10} pl={30} pr={14}>
      <List>
        <List className={classes.root}>
          <Typography 
            className={classes.center}
            variant="h5"
            component="h5"
          >
            Feed
          </Typography>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="sometext"
              secondary={(
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    sometext
                  </Typography>
                  {'  sometextsometextsometextsometextsometextsometextsometext'}
                </>
          )}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="sometext"
              secondary={(
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    sometext
                  </Typography>
                  {'  sometextsometextsometextsometextsometextsometextsometext'}
                </>
          )}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="sometext"
              secondary={(
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    sometext
                  </Typography>
                  {'  sometextsometextsometextsometextsometextsometextsometext'}
                </>
             )}
            />
          </ListItem>
        </List>
      </List>
    </Box>
  );
};
