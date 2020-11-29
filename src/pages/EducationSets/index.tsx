import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { UserApiDomainService } from 'services/api/domains/UserApiService';
import { EducationSet } from 'components/EducationSet';
import { AddEducationSet } from 'components/AddEducationSet';
import { Feed } from 'components/Feed';

export interface IEducationSetsPageProps {
  addUserData: typeof userActions.addUserData;
}

const EducationSetsPage: React.FC<IEducationSetsPageProps> = ({ addUserData }) => {
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
      <EducationSet />
      <EducationSet />
      <AddEducationSet />
    </Box>
  );
};

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(EducationSetsPage);
