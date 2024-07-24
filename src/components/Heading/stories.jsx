import { Heading } from '.';
import '../../styles/index.css';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'A text for heading',
    colordark: true,
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

export const Template = (args) => <Heading {...args} />;
