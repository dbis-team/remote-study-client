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
  const addSubject = async (payload: ICreateSubject) => {
    await onAddSubject(payload);
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <ModalWindow 
      isOpen={isOpen} 
      handleClose={handleClose} 
      title="Add subject"
    >
      <AddSubject educationSetId={educationSetId} onAddSubject={addSubject} />
    </ModalWindow>
  )
};

export default AddSubjectModal;
