import { configureStore } from '@reduxjs/toolkit';
import { initialStore } from './initialStore';

import { reducer as userData } from './reducers/user';
import { reducer as isUserAuthenticated } from './reducers/isUserAuthenticated';

function initStore() {
  const store = configureStore({
    preloadedState: initialStore,
    reducer: { userData, isUserAuthenticated },
  });

  return store;
}

export { initStore };
