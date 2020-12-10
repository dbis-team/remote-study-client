import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { AdminEducationSet } from 'components/AdminEducationSet';

import { educationSetApiDomainService } from 'services/api/domains/EducationSetApiService';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';
import { useLoadData } from 'hooks/loadDataHook';
import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';

export interface IEducationSetsPageProps {
  addUserData: typeof userActions.addUserData;
  setAlert: typeof alertActions.setAutoCleaningAlert;
}

const EducationSetsPage: React.FC<IEducationSetsPageProps> = ({ setAlert }) => {
  const educationSets = useLoadData({
    task: educationSetApiDomainService.getEducationSet(),
    onError: (_) => {
      setAlert({
        open: true,
        feedbackMessage: 'Get education sets error',
        severity: 'error',
      })
    }
  });

  const deleteEducationSet = async (id: string) => {
    const res = await educationSetApiDomainService.deleteEducationSet(id);
    res
      .rightSideEffect(() => educationSets.refetch())
      .leftSideEffect(() => {
        setAlert({
          open: true,
          feedbackMessage: 'Error during deleting education set',
          severity: 'error',
        })
      }); 
  };

  const createEducationSet = async (payload: ICreateEducationSet) => {
    const res = await educationSetApiDomainService.createEducationSet(payload);
    res
      .rightSideEffect(() => educationSets.refetch())
      .leftSideEffect(() => {
        setAlert({
          open: true,
          feedbackMessage: 'Error during creating education set',
          severity: 'error',
        })
      });
  }

  return (
    <Box>
      <AdminEducationSet 
        onDeleteEducationSet={deleteEducationSet} 
        educationsSets={educationSets.data || []} 
        onCreateEducationSet={createEducationSet}
      />
    </Box>
  );  
};

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
  setAlert: alertActions.setAutoCleaningAlert
};

export default connect(null, mapDispatchToProps)(EducationSetsPage);
