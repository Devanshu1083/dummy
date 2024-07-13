import React from 'react';
import { TextField, InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

function SearchBar() {
  return (
    <TextField
      label="Search Room no."
      variant='filled'
      
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: '190px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 1,
        borderColor: 'black',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(0, 0, 0, 0.54)', // Label color when not focused
          '&.Mui-focused': {
            color: 'rgba(0, 0, 0, 0.54)', // Label color when focused
          },
        },
      }}
    />
  );
}

export default SearchBar;