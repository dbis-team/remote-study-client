import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

import { AddEducationSetModal } from './AddEducationSetModal';
import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';

export interface IProps {
  onCreateEducationSet: (payload: ICreateEducationSet) => Promise<void>;
}

export const AddEducationSet: React.FC<IProps> = ({ onCreateEducationSet }) => {
  const classes = useStyles();

  const [showModal, setShowModal] = React.useState(false);

  return (
    <Box pt={2} pl={10}>
      <Button 
        className={classes.color} 
        size="large" 
        variant="contained"
        onClick={() => setShowModal(true)}
      >
        Add education set
      </Button>
      <AddEducationSetModal 
        isOpen={showModal} 
        handleClose={() => setShowModal(false)} 
        onCreateEducationSet={onCreateEducationSet}
      />
    </Box>
  );
};
