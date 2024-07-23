import { Hheadning } from '.';

export default {
  title: 'Hheadning',
  component: Hheadning,
  args: {
    children: 'A text for heading',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => <Hheadning {...args} />;
