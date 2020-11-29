import { all } from 'redux-saga/effects';

import { alertSagas } from './alert';
import { authSagas } from './auth';

export function* rootSaga() {
  yield all([alertSagas(), authSagas()]);
}
