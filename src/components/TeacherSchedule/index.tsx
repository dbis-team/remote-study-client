import { Box } from '@material-ui/core';
import { ChangeSetList } from 'components/ChangeSetList';
import { RawSchedule } from 'components/RawSchedule';
import React from 'react';

export const TeacherSchedule: React.FunctionComponent = () => (
  <Box display="flex">
    <RawSchedule />
    <ChangeSetList />
  </Box> 
);
