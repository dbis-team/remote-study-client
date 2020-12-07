import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { SubjectForStudent } from 'components/SubjectForStudent';
import { useStyles } from './styles';
    
export const EducationSetForStudent: React.FunctionComponent = () => {
  const classes = useStyles();
  
  return (
    <Box display="block" className={classes.rootBox} pt={12} pl={10}>
      <List>
        <SubjectForStudent />
      </List>
    </Box>
  );
};
