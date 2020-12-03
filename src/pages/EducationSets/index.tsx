import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { StudentEducationSet } from 'components/StudentEducationSet';

export interface IEducationSetsPageProps {
  addUserData: typeof userActions.addUserData;
}

const EducationSetsPage: React.FC<IEducationSetsPageProps> = () => (
  <Box>
    <StudentEducationSet />
  </Box>
);

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(EducationSetsPage);
