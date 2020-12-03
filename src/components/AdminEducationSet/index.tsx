import React from 'react';
import { EducationSet } from 'components/EducationSet';
import { AddEducationSet } from 'components/AddEducationSet';
import Box from '@material-ui/core/Box';

export const AdminEducationSet: React.FunctionComponent = () => (
  <Box>
    <EducationSet />
    <EducationSet />
    <AddEducationSet />
  </Box>
);
