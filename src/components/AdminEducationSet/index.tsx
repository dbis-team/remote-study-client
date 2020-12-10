import React from 'react';
import Box from '@material-ui/core/Box';

import { EducationSet } from 'components/EducationSet';
import { AddEducationSet } from 'components/AddEducationSet';
import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';

export interface IAdminEducationSetProps {
  educationsSets: IEducationSet[];
  onDeleteEducationSet: (id: string) => Promise<void>;
  onCreateEducationSet: (payload: ICreateEducationSet) => Promise<void>;
}

export const AdminEducationSet: React.FC<IAdminEducationSetProps> = ({ 
  educationsSets,
  onDeleteEducationSet,
  onCreateEducationSet
}) => (
  <Box>
    {educationsSets.map((educationSet) => 
      <EducationSet 
        onDelete={onDeleteEducationSet} 
        educationSet={educationSet} 
        key={educationSet.Id}
      />
    )}
    <AddEducationSet onCreateEducationSet={onCreateEducationSet} />
  </Box>
);
