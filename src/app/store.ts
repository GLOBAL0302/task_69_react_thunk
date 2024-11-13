import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from '../components/SearchForm/searchFormSlice.ts';
import { tvShowReducer } from '../components/TvShow/tvShowSlice.ts';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    tvShow: tvShowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
