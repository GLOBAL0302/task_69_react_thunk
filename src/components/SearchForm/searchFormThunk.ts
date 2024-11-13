import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ItvShowApi } from '../../types.ts';

export const fetchTvShows = createAsyncThunk('fetchTwShows', async (tvShowName: string) => {
  const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${tvShowName.toLowerCase()}`);
  return data.map((show: ItvShowApi) => {
    return {
      label: show.show.name,
      id: show.show.id,
    };
  });
});
