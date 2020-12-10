import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { initialStore } from './initialStore';

import { reducer as userData } from './reducers/user';
import { reducer as isUserAuthenticated } from './reducers/isUserAuthenticated';
import { reducer as alertData } from './reducers/alertData';
import { reducer as isLoading } from './reducers/isLoading';

import { rootSaga } from './sagas';

function initStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

  const store = configureStore({
    preloadedState: initialStore,
    reducer: { userData, isUserAuthenticated, alertData, isLoading },
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export { initStore };
