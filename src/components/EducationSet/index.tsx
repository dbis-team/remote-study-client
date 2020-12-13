import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { Delete } from '@material-ui/icons';

import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { useStyles } from './styles';

export interface IEducationSetProps {
  educationSet: IEducationSet;
  onDelete: (id: string) => Promise<void>;
  onEducationsetClick: (id: string) => Promise<void> | void;
}

export const EducationSet: React.FC<IEducationSetProps> = ({ 
  educationSet, 
  onDelete,
  onEducationsetClick 
}) => {
  const classes = useStyles();

  return (
    <Box display="block" className={classes.rootBox} pl={10}>
      <Box display="flex" alignItems="center">
        <Box p={1} flexGrow={1}>
          <Link 
            component="button" 
            variant="h5" 
            onClick={() => onEducationsetClick(educationSet.Id)}
          >
            {educationSet.Name}
          </Link>
        </Box>
        <IconButton>
          <Delete onClick={() => onDelete(educationSet.Id)} />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
};
