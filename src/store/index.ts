import { createStore } from 'redux';

import rootReducer from './reducers';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = createStore(rootReducer);

export default store;
