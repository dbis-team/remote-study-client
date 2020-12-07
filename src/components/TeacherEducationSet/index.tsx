import React from 'react';
import { EducationSet } from 'components/EducationSet';
import Box from '@material-ui/core/Box';
import { Feed } from 'components/Feed';

export const TeacherEducationSet: React.FunctionComponent = () => (
  <Box display="flex">
    <Box><EducationSet /></Box>
    <Box><EducationSet /></Box>
    <Box><Feed /></Box>
  </Box>
);
