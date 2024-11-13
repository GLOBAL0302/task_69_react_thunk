import { ChangeEvent, useState } from 'react';
import { Autocomplete, Grid2, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { onChangeTvShow, selectTvShowName, selectTvShows } from './searchFormSlice.ts';
import { fetchTvShows } from './searchFormThunk.ts';
import { ItvShowState } from '../../types.ts';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const tvShowName = useAppSelector(selectTvShowName);
  const tvShows = useAppSelector(selectTvShows);
  const navigate = useNavigate();

  const [_selectedValue, setSelectedValue] = useState<ItvShowState | null>();

  const onChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(onChangeTvShow(e.currentTarget.value));
    dispatch(fetchTvShows(e.currentTarget.value));
  };

  const handleChange = (_event: React.ChangeEventHandler, newValue: ItvShowState) => {
    setSelectedValue(newValue); // Update state with the selected value
    navigate(`/${newValue.id}`);
  };

  return (
    <Grid2 container alignItems="center" spacing={2}>
      <Grid2>
        <Typography variant="body1" component="p">
          Search for TV Show
        </Typography>
      </Grid2>
      <Grid2>
        <Autocomplete
          onChange={handleChange}
          options={tvShows}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <>
              <TextField value={tvShowName} onChange={onChange} name="twShow" {...params} />
            </>
          )}
        />
      </Grid2>
    </Grid2>
  );
};

export default SearchForm;
