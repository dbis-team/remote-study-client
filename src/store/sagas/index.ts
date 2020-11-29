import { all } from 'redux-saga/effects';

import { alertSagas } from './alert';

export function* rootSaga() {
  yield all([alertSagas()]);
}
