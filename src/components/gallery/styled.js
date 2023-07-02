'use client';

import styled from 'styled-components';

export const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
border-radius: 4px;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
`;

export const Wrapper = styled.div`
width: 200px;
height: 200px;
background: white;
border-radius: 4px;
`;

export const Container = styled.div`
    max-width: 1300px;
    padding: 0 40px;
    margin: 0 auto;
`;

export const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;
