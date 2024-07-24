import { Headning } from '.';

export default {
  title: 'Headning',
  component: Headning,
  args: {
    children: 'A text for heading',
  },
  argTypes: {
    children: { type: 'string' },
    colordark: { type: 'boolean' },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
      type: 'string',
    },
    size: {
      options: ['small', 'medium', 'big'],
      control: { type: 'select' },
      type: 'string',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => <Headning {...args} />;
