'use client';

import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Container, LogoWrapper, Logo, IconWrapper } from './styled';
import MiniCart from '../MiniCart';

function Navbar() {
  return (
    <nav>
      <Container>
        <LogoWrapper>
          <Logo src="images/logo.png" alt="logo" />
        </LogoWrapper>
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
