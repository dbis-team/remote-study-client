import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { Subject } from 'components/Subject';
import { useStyles } from './styles';

export const EducationSet: React.FC = () => {
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
          <Box p={1}>
            <Button size="large" variant="contained" color="primary">
              Add subject
            </Button>
          </Box>
        </Box>
        <Divider />
        <Subject />
        <Divider light />
        <Subject />
        <Divider light />
        <Subject />
        <Divider light />
      </List>
    </Box>
  );
};
