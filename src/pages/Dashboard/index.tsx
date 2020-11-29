import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { userApiDomainService } from 'services/api/domains/UserApiService';

export interface IDashboardPageProps {
  addUserData: typeof userActions.addUserData;
}

const DashboardPage: React.FC<IDashboardPageProps> = ({ addUserData }) => {
  React.useEffect(() => {
    /**
     * It's just tests of API and redux
     */

    userApiDomainService.getUsers()
      .then((users) => (users.isLeft()
        ? console.error(users.getLeft())
        : console.info(users.getRight())));

    addUserData({ Id: '123' });
  }, [addUserData]);

  return (
    <Box style={{ textAlign: 'center' }}>
      <Typography>Coming soon...</Typography>
    </Box>
  );
};

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(DashboardPage);
