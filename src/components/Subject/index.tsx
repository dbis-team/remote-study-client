import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

export const Subject: React.FunctionComponent = () => {
  const classes = useStyles();
  
  return (
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
        <Button variant="contained" color="primary" className={classes.margin}>
          Add teacher
        </Button>
        <Button variant="contained" color="primary">
          Add student
        </Button>
      </Box>
    </Box> 
  );
};
