import React from 'react';
import Box from '@material-ui/core/Box';
import { Feed } from 'components/Feed';
import { EducationSetForTeacher } from 'components/EducationSetForTeacher';

export const TeacherEducationSet: React.FunctionComponent = () => (
  <Box display="flex">
    <Box flexGrow={1}>
      <EducationSetForTeacher />
      <EducationSetForTeacher />
    </Box>
    <Box><Feed /></Box>
  </Box>
);
