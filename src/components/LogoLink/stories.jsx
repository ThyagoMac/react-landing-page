import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoMuxo',
    srcImage: 'public/img/logo.svg',
    link: 'google.com',
  },
  argTypes: {
    text: { type: 'string' },
    srcImage: { type: 'string' },
    link: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
