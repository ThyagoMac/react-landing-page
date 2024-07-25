import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Container title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          blanditiis repellat quisquam maiores veritatis quaerat natus, quis
          sequi fugiat nesciunt quod obcaecati itaque ullam possimus quo
          delectus, harum excepturi dolore.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
