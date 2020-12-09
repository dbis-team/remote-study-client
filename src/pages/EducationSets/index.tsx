import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
// import { TeacherEducationSet } from 'components/TeacherEducationSet';
import { AdminEducationSet } from 'components/AdminEducationSet';
import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';
// import { StudentEducationSet } from 'components/StudentEducationSet';

import { educationSetApiDomainService } from 'services/api/domains/EducationSetApiService';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';

export interface IEducationSetsPageProps {
  addUserData: typeof userActions.addUserData;
  setAlert: typeof alertActions.setAutoCleaningAlert;
}

const EducationSetsPage: React.FC<IEducationSetsPageProps> = ({ setAlert }) => {
  const [educationSets, setEducationSets] = React.useState<IEducationSet[]>([]);

  const getEducationSets = async () => {
    const result = await educationSetApiDomainService.getEducationSet();
    result
      .rightSideEffect((sets) => setEducationSets(sets))
      .leftSideEffect(() => {
        setAlert({
          open: true,
          feedbackMessage: 'Get education sets error',
          severity: 'error',
        });
      });
  };

  useEffect(() => {
    getEducationSets();
  }, []);

  return (
    <Box>
      <AdminEducationSet />
      {/* <StudentEducationSet />
      <TeacherEducationSet /> */}
    </Box>
  );  
};

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
};

export default connect(null, mapDispatchToProps)(EducationSetsPage);
