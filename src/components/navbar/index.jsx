'use client';

import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Container } from './styled';

function Navbar() {
  return (
    <nav>
      <Container>
        <div className="logo">Logo</div>
        <div className="search-bar">
          <FilledInput
            id="search-bar"
            type="text"
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )}
          />
        </div>
        <div className="login-button">
          <button type="button">Login</button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
