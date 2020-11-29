import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { UserApiDomainService } from 'services/api/domains/UserApiService';
import { Schedule } from 'components/Schedule';

export interface ISchedulePageProps {
  addUserData: typeof userActions.addUserData;
}

const ScheduleSetsPage: React.FC<ISchedulePageProps> = ({ addUserData }) => {
  React.useEffect(() => {
    /**
     * It's just tests of API and redux
     */
    const userApiService = new UserApiDomainService();

    userApiService.getUsers()
      .then((users) => (users.isLeft()
        ? console.error(users.getLeft())
        : console.info(users.getRight())));

    addUserData({ Id: '123' });
  }, [addUserData]);

  return (
    <Box>
      <Schedule />
    </Box>
  );
};

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(ScheduleSetsPage);
