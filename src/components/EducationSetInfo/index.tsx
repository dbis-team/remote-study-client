import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography, Link, Divider, Button, IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';

import { IEducationSet } from 'types/entities/educationSet/IEducationSet';
import { ISubject } from 'types/entities/subject/ISubject';
import { subjectApiDomainService } from 'services/api/domains/SubjectApiService';
import { LearningMaterialsService } from 'services/api/domains/LearningMaterialsService';
import { subjectFileApiDomainService } from 'services/api/domains/SubjectFileApiService';

import { actions as alertActions } from 'store/sagas/alert/sagaActions';
import { actions as isLoadingActions } from 'store/reducers/isLoading';
import AddSubjectModal from './AddSubjectModal';
import { ICreateSubject } from 'types/entities/subject/ICreateSubject';
import { Either } from 'helpers/either';
import { ILearningMaterial } from 'types/entities/learningMaterials/ILearningMaterial';

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
  const [showModal, setShowModal] = React.useState(false);

  const fethcSubjects = React.useCallback(
    async () => {
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
    },
    [setIsLoading, setAlert, educationSet.Id]
  );

  const createSubject = async (payload: ICreateSubject, files?: File[]) => {
    setIsLoading(true);
    console.info(payload);
    console.info(files);

    const [learningMaterials, subjectEither] = await Promise.all([
      files && !!files.length
        ? await LearningMaterialsService.getInstanse().storeLearningMaterials(files)
        : await Promise.resolve(Either.right<Error, ILearningMaterial[]>([])),
      
      subjectApiDomainService.createSubject(payload)
    ]);

    const res = await Either.mergeToOne(learningMaterials, subjectEither)
      .mapRightAsync(([materials, subject]) => Promise.all(
        materials.map(material => subjectFileApiDomainService.addSubjectFile({ 
          subjectId: subject.Id,
          fileId: material._id
        }))
      ));

    res
      .rightSideEffect(fethcSubjects)
      .leftSideEffect(() => {
        setAlert({
          open: true,
          severity: 'error',
          feedbackMessage: 'Error during subject creating'
        })
      });

    setIsLoading(false);
  };

  const onDeleteSubject = async (id: string) => {
    setIsLoading(true);

    const res = await subjectApiDomainService.deleteSubject(id);
    res
      .rightSideEffect(fethcSubjects)
      .leftSideEffect(() => {
        setAlert({
          open: true,
          severity: 'error',
          feedbackMessage: 'Error during subject deleting'
        })
      });

    setIsLoading(false);
  };

  React.useEffect(() => {
    fethcSubjects();
  }, [fethcSubjects])

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
          onClick={() => setShowModal(true)}
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
              <Box key={subject.Id} pl={2}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Link variant="h6" component="button">{subject.Name}</Link>
                    <Typography variant="subtitle1">
                      {subject.Description}
                    </Typography>
                  </Box>
                  <IconButton onClick={() => onDeleteSubject(subject.Id)}>
                    <Delete />
                  </IconButton>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>
        </Box>
      }
      <AddSubjectModal
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
        educationSetId={educationSet.Id}
        onAddSubject={createSubject}
      />
    </Box>
  );
};

const mapDispatchToProps = {
  setAlert: alertActions.setAutoCleaningAlert,
  setIsLoading: isLoadingActions.setIsLoading
};

export default connect(null, mapDispatchToProps)(EducationSet);
