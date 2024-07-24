import { TextComponent } from './index';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti omnis perferendis quidem quo reiciendis impedit soluta aspernatur, ullam laborum placeat provident libero tenetur? Provident consequuntur sunt reprehenderit. Earum, provident.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
