import { createAction } from '@reduxjs/toolkit';
import { IGlobalStore } from 'types/interfaces/IGlobalStore';

export const sagaActions = {
  SET_AUTO_CLEANING_ALERT: 'SET_AUTO_CLEANING_ALERT',
};

export const actions = {
  setAutoCleaningAlert: createAction<IGlobalStore['alertData']>(sagaActions.SET_AUTO_CLEANING_ALERT),
};
