import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.big};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.medium}
  }
`;

export const HeadingStyle = styled.h1`
  ${({ theme, colordark, size }) => css`
    color: ${colordark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)};
  `}
`;
