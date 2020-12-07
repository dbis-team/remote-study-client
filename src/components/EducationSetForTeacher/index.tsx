import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { SubjectWithoutButton } from 'components/SubjectWithoutButton';
import { useStyles } from './styles';

export const EducationSetForTeacher: React.FunctionComponent = () => {
  const classes = useStyles();
  
  return (
    <Box display="block" className={classes.rootBox} pt={12} pl={10}>
      <List>
        <Box display="flex">
          <Box p={1} flexGrow={1}>
            <Typography
              variant="h4"
              component="h4"
            >
              Education set
            </Typography>
          </Box>
        </Box>
        <Divider />
        <SubjectWithoutButton />
        <Divider light />
        <SubjectWithoutButton />
        <Divider light />
        <SubjectWithoutButton />
        <Divider light />
      </List>
    </Box>
  );
};
