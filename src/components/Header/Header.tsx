import { AppBar, Grid2, Toolbar, Typography } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 5 }}>
      <Toolbar>
        <Grid2 container direction="row" spacing={2}>
          <Grid2>
            <LiveTvIcon />
          </Grid2>
          <Grid2>
            <Typography variant="h6" component="div">
              <NavLink to="/">TV SHOWS</NavLink>
            </Typography>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
