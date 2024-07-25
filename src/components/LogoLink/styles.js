import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-tems: center;
    text-decoration: none;
    color: inherit;

    > img {
      height: 1rem;

      width: auto;
    }
  `}
`;
