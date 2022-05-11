import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../store/features/counter/counter-slice';
import postReducer from './features/posts/posts-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});
