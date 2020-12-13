import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { ICreateSubject } from 'types/entities/subject/ICreateSubject';

type Values = Omit<ICreateSubject, 'educationSetId'>;

export interface IAddSubjectProps {
  onAddSubject: (payload: ICreateSubject) => Promise<void> | void;
  educationSetId: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
});

const AddSubjectForm: React.FC<IAddSubjectProps> = ({ onAddSubject, educationSetId }) => {
  const handleSubmit = async (values: Values, helper: FormikHelpers<Values>) => {
    await onAddSubject({ ...values, educationSetId });
    helper.resetForm();
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
              variant="outlined"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && !!errors.description}
              helperText={touched.description && errors.description}
            />
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
