import React from 'react';

import ModalWindow, { ModalWindowPropsInterface } from 'components/Modals/ModalWindow';
import AddSubject, { IAddSubjectProps } from 'components/AddSubject';
import { ICreateSubject } from 'types/entities/subject/ICreateSubject';

export interface IProps 
  extends Pick<ModalWindowPropsInterface, 'isOpen' | 'handleClose'>, 
  IAddSubjectProps {}

const AddSubjectModal: React.FC<IProps> = ({
  isOpen,
  handleClose,
  educationSetId,
  onAddSubject
}) => {
  const addSubject = async (payload: ICreateSubject, files?: File[]) => {
    await onAddSubject(payload, files);
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <ModalWindow 
      isOpen={isOpen} 
      handleClose={handleClose} 
      title="Add subject"
      maxWidth='xl'
    >
      <AddSubject educationSetId={educationSetId} onAddSubject={addSubject} />
    </ModalWindow>
  )
};

export default AddSubjectModal;
