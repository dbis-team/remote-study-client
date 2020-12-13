import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put, call } from 'redux-saga/effects';

import { ACCESS_TOKEN } from 'constants/localStoreKeys';
import { LocalStoreService } from 'services/LocalStoreService';
import { actions as authActions } from './sagaActions';
import { actions as isUserAuthenticatedActions } from '../../reducers/isUserAuthenticated';
import { actions as userActions } from '../../reducers/user';
import { actions as alertActions } from '../alert/sagaActions';
import { actions as isLoadingActions } from '../../reducers/isLoading';

import { userApiDomainService } from 'services/api/domains/UserApiService';
import { ILoginPayload } from 'types/entities/user/ILoginPayload';

function* checkAuthWorker() {
  try {
    const token = LocalStoreService.getInstance().get(ACCESS_TOKEN);
    if (!token) {
      return;
    }

    const user = yield call(userApiDomainService.getMe);
    if (user.isLeft()) {
      throw user.getLeft();
    }

    yield put(isUserAuthenticatedActions.setUserAuthenticated(true));
  } catch (error) {
    LocalStoreService.getInstance().remove(ACCESS_TOKEN);
    yield put(isUserAuthenticatedActions.setUserAuthenticated(false));

    yield put(alertActions.setAutoCleaningAlert({
      open: true,
      severity: 'error',
      feedbackMessage: 'Your session expired'
    }));
  }
}

function* loginWorker(action: PayloadAction<ILoginPayload>) {
  try {
    yield put(isLoadingActions.setIsLoading(true));
    const loginData = yield call(userApiDomainService.login, action.payload);
    if (loginData.isLeft()) {
      throw loginData.getLeft();
    }

    loginData.rightSideEffect(({ access_token }: { access_token: string }) => {
      LocalStoreService.getInstance().add(ACCESS_TOKEN, access_token);
    });

    const user = yield call(userApiDomainService.getMe);
    if (user.isLeft()) {
      throw user.getLeft();
    }

    yield put(userActions.addUserData(user.getRight()[0]));
    yield put(isUserAuthenticatedActions.setUserAuthenticated(true));
  
    yield put(alertActions.setAutoCleaningAlert({
      open: true,
      severity: 'success',
      feedbackMessage: 'Logined successfuly'
    }));
  } catch (error) {
    LocalStoreService.getInstance().remove(ACCESS_TOKEN);
    yield put(alertActions.setAutoCleaningAlert({
      open: true,
      severity: 'error',
      feedbackMessage: 'Error hapened during login'
    }));
  } finally {
    yield put(isLoadingActions.setIsLoading(false));
  }
}

export function* authSagas() {
  yield takeEvery(authActions.checkAuthStatus.type, checkAuthWorker);
  yield takeEvery(authActions.login.type, loginWorker)
}
