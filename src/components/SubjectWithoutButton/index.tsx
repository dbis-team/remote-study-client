import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const SubjectWithoutButton: React.FunctionComponent = () => (
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
      <Typography>
        Some info about subject
      </Typography>
    </Box>
  </Box> 
);
