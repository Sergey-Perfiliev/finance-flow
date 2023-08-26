import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import addOperationSlice from './reducers/AddOperationSlice';

export const store = configureStore({
  reducer: {
    addOperation: addOperationSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([logger])
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore['dispatch']
