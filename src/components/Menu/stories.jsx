import { Menu } from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'logo',
      srcImage: 'public/img/logo.svg',
      link: '#target',
    },
  },
  argTypes: {
    logoData: { type: '' },
    links: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
