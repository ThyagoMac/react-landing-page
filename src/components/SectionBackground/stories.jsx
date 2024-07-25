import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Title For example</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          praesentium dolores optio ad dolore omnis animi excepturi rerum
          quaerat voluptatem ea, molestias modi non blanditiis, quos minima?
          Atque, itaque officiis?
        </p>
      </div>
    ),
    background: false,
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
