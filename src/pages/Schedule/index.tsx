import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { TeacherSchedule } from 'components/TeacherSchedule';

export interface ISchedulePageProps {
  addUserData: typeof userActions.addUserData;
}

const ScheduleSetsPage: React.FC<ISchedulePageProps> = () => (
  <Box>
    <TeacherSchedule />
  </Box>
);

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(ScheduleSetsPage);
