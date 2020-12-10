import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { Subject } from 'components/Subject';
import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { useStyles } from './styles';

import { educationSetApiDomainService } from 'services/api/domains/EducationSetApiService';

export interface IEducationSetProps {
  educationSet: IEducationSet;
}

export const EducationSet: React.FC<IEducationSetProps> = ({ educationSet }) => {
  const classes = useStyles();
  
  
  const handleDelete = async (id:string) => {
    const result = await educationSetApiDomainService.deleteEducationSet(id);
    result
      .rightSideEffect(() => {
        console.info('Right');
      })
      .leftSideEffect(() => {
        console.info('Left');
      });
  }

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
        <Box pt={1} pr={2} display="flex" justifyContent="flex-end">
          <Button 
            size="small" 
            variant="contained" 
            color="secondary"
            onClick={() => handleDelete(educationSet.Id)}
          >
                Delete education set
          </Button>
        </Box>
      </List>
    </Box>
  );
};
