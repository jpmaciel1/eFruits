'use client';

import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Container, LogoWrapper, Logo, IconWrapper, SearchBarWrapper } from './styled';
import MiniCart from '../MiniCart';

function Navbar() {
  return (
    <nav>
      <Container>
        <LogoWrapper>
          <Logo src="images/logo.png" alt="logo" />
        </LogoWrapper>

        <SearchBarWrapper>
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
        </SearchBarWrapper>
        <IconWrapper>
          <Button color="secondary">
            <AccountCircleIcon />
          </Button>
          <MiniCart />
        </IconWrapper>
      </Container>
    </nav>
  );
}

export default Navbar;
