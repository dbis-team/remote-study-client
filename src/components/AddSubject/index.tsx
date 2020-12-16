import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { ICreateSubject } from 'types/entities/subject/ICreateSubject';
import { DropZone } from '../DropZone';
import { FileComponent } from '../File';
import { useStyles } from './styles';

type Values = Omit<ICreateSubject, 'educationSetId'>;

export interface IAddSubjectProps {
  onAddSubject: (payload: ICreateSubject, files?: File[]) => Promise<void> | void;
  educationSetId: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
});

const AddSubjectForm: React.FC<IAddSubjectProps> = ({ onAddSubject, educationSetId }) => {
  const classes = useStyles();
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const handleSubmit = async (values: Values, helper: FormikHelpers<Values>) => {
    await onAddSubject({ ...values, educationSetId }, [...selectedFiles]);
    helper.resetForm();
  };

  const deleteFile = (file: File) => {
    setSelectedFiles(prevArray => prevArray.filter(prevFile => prevFile !== file));
  };

  const addFiles = (files: File[]) => {
    setSelectedFiles(prevArr => [...prevArr, ...files]);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form>
          <Box pt={3}>
            <TextField 
              className={classes.textField}
              variant="outlined"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
          </Box>
          <Box pt={3}>
            <TextField 
              className={classes.textField}
              variant="outlined"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline
              rows={4}
              error={touched.description && !!errors.description}
              helperText={touched.description && errors.description}
            />
          </Box>
          <Box pt={3}>
            <DropZone onAddFiles={addFiles} />
            <Box>
              {selectedFiles.map(file => <FileComponent 
                file={file} 
                onFileRemove={deleteFile} />
              )}
            </Box>
          </Box>
          <Box pt={2}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
            >
              Save
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddSubjectForm;
