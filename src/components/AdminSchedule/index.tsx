import { Box } from '@material-ui/core';
import { ChangeEducationSet } from 'components/ChangeEducationSet';
import { RawSchedule } from 'components/RawSchedule';
import React from 'react';
import { useStyles } from './styles';

export const AdminSchedule: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box className={classes.half}>
        <RawSchedule />
      </Box>
      <ChangeEducationSet />
    </Box> 
  );
};
