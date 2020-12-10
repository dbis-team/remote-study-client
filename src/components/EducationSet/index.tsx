import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { Subject } from 'components/Subject';
import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { useStyles } from './styles';


export interface IEducationSetProps {
  educationSet: IEducationSet;
  onDelete: (id: string) => Promise<void>;
}

export const EducationSet: React.FC<IEducationSetProps> = ({ educationSet, onDelete }) => {
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
              {educationSet.Name}
            </Typography>
          </Box>
          <Box p={1}>
            <Button size="medium" variant="contained" color="primary">
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
        <Box pt={1} pr={2} display="flex" justifyContent="flex-end">
          <Button 
            size="medium" 
            variant="contained" 
            color="secondary"
            onClick={() => onDelete(educationSet.Id)}
          >
                Delete education set
          </Button>
        </Box>
      </List>
    </Box>
  );
};
