import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { RawSchedule } from 'components/RawSchedule';

export interface ISchedulePageProps {
  addUserData: typeof userActions.addUserData;
}

const ScheduleSetsPage: React.FC<ISchedulePageProps> = ({ /* addUserData */ }) => (
  <Box>
    <RawSchedule />
  </Box>
);

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(ScheduleSetsPage);
