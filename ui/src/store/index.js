import { createStore, combineReducers } from 'redux';

// Local storage
import { loadState, saveState } from './localStorage';

// Root reducers
import user from './user/reducer';

const persistedState = loadState();

const rootReducer = combineReducers({
    user,
});

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState(store);
});

export default store;
