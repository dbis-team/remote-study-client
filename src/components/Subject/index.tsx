import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Subject: React.FunctionComponent = () => (
  <Box display="flex">
    <Box p={1} flexGrow={1}>
      <Typography
        variant="h5"
        component="h5"
      >
        Subject
      </Typography>
    </Box>
    <Box p={1}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <EditIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add to shopping cart">
        <HighlightOffIcon />
      </IconButton>
    </Box>
  </Box> 
);
