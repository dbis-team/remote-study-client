import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export const Schedule: React.FunctionComponent = () => {
  const classes = useStyles();
  
  return (
    <Box pt={10} textAlign="center">
      <Typography
        className={classes.typog}
        variant="h2"
        component="h2"
        gutterBottom
      >
        Schedule
      </Typography>
      {/* DO SCHEDULE */}
    </Box>
  );
};
