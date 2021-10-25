import { configureStore} from '@reduxjs/toolkit';
import authReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: authReducer
  },
  devTools: process.env.NODE_ENV === 'development'
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;