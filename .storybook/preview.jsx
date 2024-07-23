import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.lightBg,
        },
        {
          name: 'dark',
          value: theme.colors.darkBg,
        },
        {
          name: 'secondary',
          value: theme.colors.secondaryBg,
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
