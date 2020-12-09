import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { TeacherSchedule } from 'components/TeacherSchedule';
// import { AdminSchedule } from 'components/AdminSchedule';
// import { StudentSchedule } from 'components/StudentSchedule';

export interface ISchedulePageProps {
  addUserData: typeof userActions.addUserData;
}

const ScheduleSetsPage: React.FC<ISchedulePageProps> = () => (
  <Box>
    <TeacherSchedule />
    {/* <AdminSchedule />
    <StudentSchedule /> */}
  </Box>
);

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(ScheduleSetsPage);
