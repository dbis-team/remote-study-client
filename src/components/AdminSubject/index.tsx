import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography, Link, Divider, IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

import { ISubject } from 'types/entities/subject/ISubject';
import { ILearningMaterial } from 'types/entities/learningMaterials/ILearningMaterial';

import { subjectFileApiDomainService } from 'services/api/domains/SubjectFileApiService';
import { LearningMaterialsService } from 'services/api/domains/LearningMaterialsService';
import { FileReadonlyComponent } from '../FileReadonly';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';
import { actions as isLoadingActions } from 'store/reducers/isLoading';

export interface IAdminSubjectProps {
  subject: ISubject;
  onDeleteSubject: (id: string) => void | Promise<void>;
  setAlert: typeof alertActions.setAutoCleaningAlert;
  setIsLoading: typeof isLoadingActions.setIsLoading;
}

const AdminSubject: React.FC<IAdminSubjectProps> = ({ 
  subject, 
  onDeleteSubject,
  setAlert,
  setIsLoading 
}) => {
  const [files, setFiles] = React.useState<ILearningMaterial[]>([]);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await subjectFileApiDomainService.getFilesBySubjectId(subject.Id);
      const files = await res.mapRightAsync(subjectFiles => 
        LearningMaterialsService.getInstanse().getLearningMaterials(subjectFiles.map(({ Id }) => Id))
      );

      files
        .join()
        .rightSideEffect(setFiles)
        .leftSideEffect(() => {
          setAlert({
            open: true,
            feedbackMessage: 'Cannot fetch subject files',
            severity: 'error'
          });
        });

      setIsLoading(false);
    })();
  }, [setAlert, setIsLoading, subject.Id]);
  
  return (
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
      <Box>
        {files.map(file => (
          <FileReadonlyComponent 
            fileUrl={file.link}
            fileName={file.name}
          />
        ))}
      </Box>
      <Divider />
    </Box>
  );
};

const mapDispatchToProps = {
  setAlert: alertActions.setAutoCleaningAlert,
  setIsLoading: isLoadingActions.setIsLoading
};

export default connect(null, mapDispatchToProps)(AdminSubject);
