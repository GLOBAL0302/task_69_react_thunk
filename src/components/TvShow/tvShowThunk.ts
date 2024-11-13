import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchTvShowApi } from '../../types.ts';
import { RootState } from '../../app/store.ts';

export const fetchTvShowThunk = createAsyncThunk<fetchTvShowApi, string, { state: RootState }>(
  'tvShow/fetchTvShowThunk',
  async (showId) => {
    const { data } = await axios.get(`http://api.tvmaze.com/shows/${showId}`);

    return data;
  },
);
