import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, List, ListItem } from '@material-ui/core';

export const SubjectForStudent: React.FunctionComponent = () => (
  <Box display="flex">
    <List>
      <Box p={1} flexGrow={1}>
        <Button>
          <Typography
            variant="h5"
            component="h5"
          >
            Subject
          </Typography>
        </Button>
      </Box>
      <ListItem>
        <Typography
          variant="h6"
          component="h6"
        >
          Subject info 1
        </Typography>
      </ListItem>
      <ListItem>
        <Typography
          variant="h6"
          component="h6"
        >
          Subject info 2
        </Typography>
      </ListItem>
    </List>
  </Box> 
);
