import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography, Link, Divider, Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { ISubject } from 'types/entities/subject/ISubject';
import { subjectApiDomainService } from 'services/api/domains/SubjectApiService';

import { actions as alertActions } from 'store/sagas/alert/sagaActions';
import { actions as isLoadingActions } from 'store/reducers/isLoading';

export interface IProps {
  educationSet: IEducationSet;
  setAlert: typeof alertActions.setAutoCleaningAlert;
  setIsLoading: typeof isLoadingActions.setIsLoading;
}

const EducationSet: React.FC<IProps> = ({ 
  educationSet,
  setAlert,
  setIsLoading
}) => {
  const [subjects, setSubjects] = React.useState<ISubject[]>([]);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const subjectsEither = await subjectApiDomainService.getSubjectsByEducationSet(educationSet.Id);

      subjectsEither
        .rightSideEffect(educationSetSubjects => setSubjects(educationSetSubjects))
        .leftSideEffect(() => {
          setAlert({
            open: true,
            severity: 'error',
            feedbackMessage: 'Cannot fetch data from server'
          })
        })

      setIsLoading(false);    
    })()
  }, [setIsLoading, setAlert, educationSet.Id])

  return (
    <Box p={8}>
      <Box pb={8}>
        <Typography variant="h4">{educationSet.Name}</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Box pb={2}>
        <Button 
          onClick={() => console.info('qweqwe')}
          startIcon={<Add />}
          color="primary"
          variant="contained"
        >
          Add subject
        </Button>
      </Box>
      {
        !!subjects.length &&
        <Box>
          <Typography variant="h5">
            Subjects:
          </Typography>
          <Box pt={2}>
            {subjects.map(subject => (
              <Box pl={2}>
                <Link variant="h6" component="button">{subject.Name}</Link>
                <Typography variant="subtitle1">
                  {subject.Description}
                </Typography>
                <Divider />
              </Box>
            ))}
          </Box>
        </Box>
      }
    </Box>
  );
};

const mapDispatchToProps = {
  setAlert: alertActions.setAutoCleaningAlert,
  setIsLoading: isLoadingActions.setIsLoading
};

export default connect(null, mapDispatchToProps)(EducationSet);
