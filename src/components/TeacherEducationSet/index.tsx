import React from 'react';
import { useStyles } from './styles';
import { EducationSet } from 'components/EducationSet';
import Box from '@material-ui/core/Box';
import { Feed } from 'components/Feed';

export const TeacherEducationSet: React.FunctionComponent = () => {
    const classes = useStyles();
    
    return (
        <Box display="flex">
          
          <Box className={classes.oneThird}><EducationSet /></Box>
          <Box className={classes.oneThird}><EducationSet /></Box>
          <Box  className={classes.half}><Feed/></Box>
        </Box>
    );
  };