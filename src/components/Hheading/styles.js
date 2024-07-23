import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const HheadingStyle = styled.h1`
  ${() => css`
    color: ${theme.colors.primaryColor}
  `}
`;
