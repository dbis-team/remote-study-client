import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export const AddEducationSet: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box pt={2} pl={10}>
      <Button className={classes.color} size="large" variant="contained">
        Add education set
      </Button>
    </Box>
  );
};
