import styled, { css } from 'styled-components';
import { HeadingStyle } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.font.sizes.large};

    ${HeadingStyle} {
      margin-bottom: ${theme.font.sizes.large};
    }

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      text-align: center;
      margin-bottom: ${theme.font.sizes.large};
    }
  `}
`;
export const ImgContainer = styled.div`
  ${({ theme }) => css``}
`;
export const Image = styled.img`
  ${({ theme }) => css``}
`;
