import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
    text-align: center;
    max-width: 36.25rem;
    margin: 0 auto;
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.font.sizes.xlarge} 0;

    p {
      margin: ${theme.font.sizes.medium} 0;
    }

    a {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
    }
  `}
`;
