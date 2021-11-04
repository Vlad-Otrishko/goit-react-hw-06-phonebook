import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});


const persistConfig = {
  key: 'phonebookContacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
    
const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };