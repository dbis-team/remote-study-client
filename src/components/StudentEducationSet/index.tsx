import React from 'react';
import Box from '@material-ui/core/Box';
import { Feed } from 'components/Feed';
import { EducationSetForStudent } from 'components/EducationSetForStudent';
import Typography from '@material-ui/core/Typography';

export const StudentEducationSet: React.FunctionComponent = () => (
  <Box display="flex">
    <Box flexGrow={1} pt={20} pl={10}>
      <Box pl={10}>
        <Typography
          variant="h2"
          component="h2"
        >
          Education Set
        </Typography>
      </Box>
      <Box><EducationSetForStudent /></Box>
      <Box><EducationSetForStudent /></Box>
    </Box>
    <Box><Feed /></Box>
  </Box>
);
