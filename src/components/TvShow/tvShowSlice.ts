import { createSlice } from '@reduxjs/toolkit';
import { fetchTvShowThunk } from './tvShowThunk.ts';
import { fetchTvShowApi } from '../../types.ts';

interface TvShowSliceState {
  loading: boolean;
  tvShow: fetchTvShowApi | null;
}

const initialState: TvShowSliceState = {
  loading: false,
  tvShow: null,
};

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShowThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTvShowThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.tvShow = payload;
      })
      .addCase(fetchTvShowThunk.rejected, (state) => {
        state.loading = false;
      });
  },
  selectors: {
    selectTvShow: (state) => state.tvShow,
  },
});

export const tvShowReducer = tvShowSlice.reducer;
export const {} = tvShowSlice.actions;
export const { selectTvShow } = tvShowSlice.selectors;
