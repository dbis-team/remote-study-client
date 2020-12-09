import React from 'react';
import setClassNames from 'classnames';
import { Close } from '@material-ui/icons';
import {
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@material-ui/core';

export interface ModalWindowPropsInterface {
  isOpen: boolean;
  handleClose?: () => void | Promise<void>;
  className?: string;
  title?: string | React.ReactNode;
  actions?: React.ReactNode;
  fullWidth?: boolean;
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  dividers?: boolean;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const DialogTitle = (props: DialogTitleProps) => {
  const { children, onClose } = props;
  return (
    <MuiDialogTitle disableTypography>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
          <Close />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const ModalWindow: React.FC<ModalWindowPropsInterface> = (props) => {
  const {
    isOpen,
    className,
    handleClose,
    children,
    title,
    actions,
    fullWidth,
    dividers,
    maxWidth,
  } = props;

  const classNames = setClassNames('modal-container', {
    [className || '']: Boolean(className),
  });

  const handleEscKeyPress = (keyboardEvent: KeyboardEvent) => {
    if (keyboardEvent.key === 'Escape' && handleClose) {
      handleClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscKeyPress);
    return () => document.removeEventListener('keydown', handleEscKeyPress);
  });

  return (
    <Dialog
      className={classNames}
      open={isOpen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      {title && <DialogTitle onClose={handleClose}>{title}</DialogTitle>}
      <DialogContent dividers={dividers}>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default ModalWindow;
