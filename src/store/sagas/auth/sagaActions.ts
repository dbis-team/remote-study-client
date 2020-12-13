import { createAction } from '@reduxjs/toolkit';
import { ILoginPayload } from 'types/entities/user/ILoginPayload';

export const sagaActions = {
  CHECK_AUTH_STATUS: 'CHECK_AUTH_STATUS',
  LOGIN: 'LOGIN'
};

export const actions = {
  checkAuthStatus: createAction(sagaActions.CHECK_AUTH_STATUS),
  login: createAction<ILoginPayload>(sagaActions.LOGIN),
};
