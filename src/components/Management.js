import React from 'react';
import { Grid, Typography } from '@mui/material';
import SearchBar from './SearchBar';

function RoomManagement() {
  // State for search term (if applicable)

  return (
    <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
      <Grid item>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Room Management</Typography>
      </Grid>
      <Grid item>
        <SearchBar/>
      </Grid>
    </Grid>
  );
}

export default RoomManagement;
