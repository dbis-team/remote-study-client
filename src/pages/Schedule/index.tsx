import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { AdminSchedule } from 'components/AdminSchedule';

export interface ISchedulePageProps {
  addUserData: typeof userActions.addUserData;
}

const ScheduleSetsPage: React.FC<ISchedulePageProps> = () => (
  <Box>
    <AdminSchedule />
  </Box>
);

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(ScheduleSetsPage);
