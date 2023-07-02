import styled from 'styled-components';

export const ItemSpecsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuantityContainer = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DownloadLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    .downloadNF{
        width: 100%;
        background: #000000;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        padding: 10px;
        text-align: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
