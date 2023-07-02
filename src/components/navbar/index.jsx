'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, LogoWrapper, Logo, IconWrapper } from './styled';
import MiniCart from '../MiniCart';
import PopperPopupState from '../loginPoppover';

function Navbar() {
  const route = useRouter();
  return (
    <nav>
      <Container>
        <LogoWrapper>
          <Logo src="images/logo.png" alt="logo" onClick={() => route.push('/')} />
        </LogoWrapper>
        <IconWrapper>
          <PopperPopupState />
          <MiniCart />
        </IconWrapper>
      </Container>
    </nav>
  );
}

export default Navbar;
