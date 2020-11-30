import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { EducationSet } from 'components/EducationSet';
import { AddEducationSet } from 'components/AddEducationSet';

export interface IEducationSetsPageProps {
  addUserData: typeof userActions.addUserData;
}

const EducationSetsPage: React.FC<IEducationSetsPageProps> = ({ addUserData }) => (
  <Box>
    <EducationSet />
    <EducationSet />
    <AddEducationSet />
  </Box>
);

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(EducationSetsPage);
