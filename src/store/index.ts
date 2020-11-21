import { configureStore } from '@reduxjs/toolkit';
import { initialStore } from './initialStore';
import { reducer as userData } from './reducers/user';

function initStore() {
  const store = configureStore({
    preloadedState: initialStore,
    reducer: { userData },
  });

  return store;
}

export { initStore };
