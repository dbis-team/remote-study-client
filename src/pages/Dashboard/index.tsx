import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { actions as userActions } from 'store/reducers/user';
import { AdminEducationSet } from 'components/AdminEducationSet';
import EducationSetInfo from 'components/EducationSetInfo';
import FullScreenModal from 'components/Modals/FullScreenModal';

import { educationSetApiDomainService } from 'services/api/domains/EducationSetApiService';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';
import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';
import { IEducationSet } from 'types/entities/educationSet/IEducationSet';

export interface IEducationSetsPageProps {
  addUserData: typeof userActions.addUserData;
  setAlert: typeof alertActions.setAutoCleaningAlert;
}

const Dashboard: React.FC<IEducationSetsPageProps> = ({ setAlert }) => {
  const [educationSets, setEducationSets] = React.useState<IEducationSet[]>([]);
  const [choosenEducationSet, chooseEducationSet] = React.useState<IEducationSet>();

  const fetchEducationSets = React.useCallback(
    async () => {
      const res = await educationSetApiDomainService.getEducationSet();
  
      res
        .rightSideEffect(newESets => setEducationSets(newESets))
        .leftSideEffect((_) => {
          setAlert({
            open: true,
            feedbackMessage: 'Get education sets error',
            severity: 'error',
          })
        })
    },
    [setAlert]
  )

  const deleteEducationSet = async (id: string) => {
    const res = await educationSetApiDomainService.deleteEducationSet(id);
    res
      .rightSideEffect(fetchEducationSets)
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
      .rightSideEffect(fetchEducationSets)
      .leftSideEffect(() => {
        setAlert({
          open: true,
          feedbackMessage: 'Error during creating education set',
          severity: 'error',
        })
      });
  };

  const onEducationsetClick = (id: string) => {
    chooseEducationSet(educationSets.find(educationSet => educationSet.Id === id));
  };

  React.useEffect(() => {
    fetchEducationSets()
  }, [fetchEducationSets]);

  return (
    <Box>
      <AdminEducationSet 
        onDeleteEducationSet={deleteEducationSet} 
        educationsSets={educationSets} 
        onCreateEducationSet={createEducationSet}
        onEducationsetClick={onEducationsetClick}
      />
      <FullScreenModal
        open={!!choosenEducationSet}
        handleClose={() => chooseEducationSet(undefined)}
        title={'Education set info'}
      >
        {
          choosenEducationSet &&
          <EducationSetInfo educationSet={choosenEducationSet} />
        }
      </FullScreenModal>
    </Box>
  );  
};

const mapDispatchToProps = {
  addUserData: userActions.addUserData,
  setAlert: alertActions.setAutoCleaningAlert
};

export default connect(null, mapDispatchToProps)(Dashboard);
