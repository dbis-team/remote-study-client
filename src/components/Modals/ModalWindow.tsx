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
import Box from '@material-ui/core/Box/Box';

import { useStyles } from './styles';

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
  const classes = useStyles();

  return (
    <MuiDialogTitle disableTypography>
      <Box display="flex">
        <Box pt={1} pr={1}>
          <Typography variant="h6">{children}</Typography>
        </Box>
        {onClose ? (
          <IconButton className={classes.closeIcon} aria-label="close" onClick={onClose}>
            <Close />
          </IconButton>
        ) : null}
      </Box>
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
