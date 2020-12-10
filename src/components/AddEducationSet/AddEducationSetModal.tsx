import React from 'react';
import { connect } from 'react-redux';
import { Button, TextField, Box } from '@material-ui/core';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { educationSetApiDomainService } from 'services/api/domains/EducationSetApiService';
import { ICreateEducationSet } from 'types/entities/educationSet/ICreateEducationSet';
import { actions as alertActions } from 'store/sagas/alert/sagaActions';
import ModalWindow, { ModalWindowPropsInterface } from '../Modals/ModalWindow';

export interface IAddEducationSetModalProps extends Pick<ModalWindowPropsInterface, 'handleClose' | 'isOpen'> {
  setAlert: typeof alertActions.setAutoCleaningAlert;
}

const AddEducationSetModal: React.FC<IAddEducationSetModalProps> = (props) => {
  const handleSubmit = async (payload: ICreateEducationSet, helper: FormikHelpers<ICreateEducationSet>) => {
    const result = await educationSetApiDomainService.createEducationSet(payload);

    result
      .rightSideEffect(() => {
        props.setAlert({ 
          open: true, 
          severity: 'success', 
          feedbackMessage: 'Education set created successfully' 
        });
      })
      .leftSideEffect(() => {
        props.setAlert({ 
          open: true, 
          severity: 'error', 
          feedbackMessage: 'Server error' 
        });
      });

    if (props.handleClose) {
      props.handleClose();
    }

    helper.resetForm();
  };

  const formik = useFormik<ICreateEducationSet>({
    initialValues: { name: '' },
    onSubmit: handleSubmit,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Field is required'),
    }),
  });

  return (
    <ModalWindow maxWidth="md" title="Add Education Set" {...props}>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <TextField
            required
            variant="outlined"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.name && formik.errors.name}
            error={!!formik.touched.name && !!formik.errors.name}
          />
        </Box>
        <Box display="flex" justifyContent="center" pt={1}>
          <Button type="submit" variant="contained">save</Button>
        </Box>
      </form>
    </ModalWindow>
  );
};

const mapDispatchToProps = {
  setAlert: alertActions.setAutoCleaningAlert,
};

export default connect(null, mapDispatchToProps)(AddEducationSetModal);
