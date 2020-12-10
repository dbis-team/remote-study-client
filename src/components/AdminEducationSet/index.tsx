import React from 'react';
import Box from '@material-ui/core/Box';

import { EducationSet } from 'components/EducationSet';
import { AddEducationSet } from 'components/AddEducationSet';
import { IEducationSet } from 'types/entities/educationSet/IEducationSet';

export interface IAdminEducationSetProps {
  educationsSets: IEducationSet[];
}

export const AdminEducationSet: React.FC<IAdminEducationSetProps> = ({ educationsSets }) => (
  <Box>
    {educationsSets.map((educationSet) => <EducationSet educationSet={educationSet} key={educationSet.Id}/>)}
    <AddEducationSet />
  </Box>
);
