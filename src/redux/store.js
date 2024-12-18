import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/userApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/userreducer';

const persistConfig = {
    key: 'root',
    storage,
  };



const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: persistedUserReducer
  },middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(authApi.middleware)
});

export const persistor = persistStore(store);