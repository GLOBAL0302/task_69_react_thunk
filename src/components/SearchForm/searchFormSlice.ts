import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTvShows } from './searchFormThunk.ts';

const initialState = {
  tvShows: [],
  tvShowName: '',
  loadingShow: false,
};

export const searchFormSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onChangeTvShow: (state, { payload }: PayloadAction<string>) => {
      state.tvShowName = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.loadingShow = true;
      })
      .addCase(fetchTvShows.fulfilled, (state, { payload }) => {
        state.loadingShow = false;
        state.tvShows = payload;
      })
      .addCase(fetchTvShows.rejected, (state) => {
        state.loadingShow = false;
      });
  },
  selectors: {
    selectTvShowName: (state) => state.tvShowName,
    selectTvShows: (state) => state.tvShows,
  },
});

export const searchReducer = searchFormSlice.reducer;
export const { onChangeTvShow } = searchFormSlice.actions;
export const { selectTvShowName, selectTvShows } = searchFormSlice.selectors;
