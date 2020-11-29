import { createAction } from '@reduxjs/toolkit';

export const sagaActions = {
  CHECK_AUTH_STATUS: 'CHECK_AUTH_STATUS',
};

export const actions = {
  checkAuthStatus: createAction(sagaActions.CHECK_AUTH_STATUS),
};
