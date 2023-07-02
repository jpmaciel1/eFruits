'use client';

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    background: #2ae0cc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

export const Logo = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    :hover{
        cursor: pointer;
    }
`;

export const LogoWrapper = styled.div`
    height: 3rem;
    width: 150px;
`;

export const IconWrapper = styled.div`
    width: 100px;
    margin: 40px;
    display: flex;
    justify-content: space-between;
`;
