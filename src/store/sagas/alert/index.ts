import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put, delay } from 'redux-saga/effects';

import { IGlobalStore } from 'types/interfaces/IGlobalStore';
import { actions as sagaAlertActions } from './sagaActions';
import { actions as alertActions } from '../../reducers/alertData';

function* setAutoCleaningAlert(alertData: PayloadAction<IGlobalStore['alertData']>) {
  try {
    yield put(alertActions.setAlertData(alertData.payload));
    yield delay(3000);
    yield put(alertActions.setAlertData({ open: false }));
  } catch (error) {
    console.error(error);    
  }
}

export function* alertSagas() {
  yield takeEvery(sagaAlertActions.setAutoCleaningAlert.type, setAutoCleaningAlert);
}
