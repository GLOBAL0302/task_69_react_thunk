import { Box, Grid2, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { useEffect } from 'react';
import { fetchTvShowThunk } from './tvShowThunk.ts';
import { selectTvShow } from './tvShowSlice.ts';

const TvShow = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const tvShow = useAppSelector(selectTvShow);

  useEffect(() => {
    if (id) {
      dispatch(fetchTvShowThunk(id));
    }
  }, [id]);

  return (
    <Box component="div" marginTop={5}>
      {tvShow && (
        <Grid2 container gap={5}>
          <Grid2>
            <img style={{ width: '300px' }} src={`${tvShow.image.original}`} alt="pic" />
          </Grid2>
          <Grid2 maxWidth="50%">
            <Typography variant="subtitle2" component="p">
              <strong>Title:</strong> {tvShow.name}
            </Typography>
            <Typography variant="subtitle2" component="p">
              <strong>Premiered:</strong> {tvShow.premiered}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              dangerouslySetInnerHTML={{ __html: tvShow.summary }}
            ></Typography>
          </Grid2>
        </Grid2>
      )}
    </Box>
  );
};

export default TvShow;
