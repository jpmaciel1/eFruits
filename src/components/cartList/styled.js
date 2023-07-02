'use client';

import styled from 'styled-components';

export const Card = styled.div`
    margin:  20px 10px;
`;
export const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100px;
`;

export const QuantityContainer = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const CheckoutButtonWrapper = styled.div`
    width: 100%;
    float: bottom;
    padding: 0 5px;
`;
