import React from 'react';
import { useStyles } from './styles';
import { EducationSet } from 'components/EducationSet';
import Box from '@material-ui/core/Box';
import { Feed } from 'components/Feed';

export const StudentEducationSet: React.FunctionComponent = () => {
    const classes = useStyles();
    
    return (
        <Box display="flex">
          <Box><EducationSet /></Box>
          <Box><EducationSet /></Box>
          <Box><Feed/></Box>
        </Box>
    );
  };