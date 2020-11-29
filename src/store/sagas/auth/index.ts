import { takeEvery, put } from 'redux-saga/effects';

import { ACCESS_TOKEN } from 'constants/localStoreKeys';
import { LocalStoreService } from 'services/LocalStoreService';
import { actions as authActions } from './sagaActions';
import { actions as isUserAuthenticatedActions } from '../../reducers/isUserAuthenticated';

function* checkAuthWorker() {
  try {
    const token = LocalStoreService.getInstance().get(ACCESS_TOKEN);
    yield put(isUserAuthenticatedActions.setUserAuthenticated(!!token));
  } catch (error) {
    console.warn('User is not authenticated');
  }
}

export function* authSagas() {
  yield takeEvery(authActions.checkAuthStatus.type, checkAuthWorker);
}
