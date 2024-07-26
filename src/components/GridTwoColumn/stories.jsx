import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    children: 'GridTwoColumn',
    title: 'ttest',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi nulla blanditiis in libero nam. Dolores illo optio, quisquam omnis ut earum, consectetur mollitia, obcaecati exercitationem fuga est vel a?',
    srcImg: 'public/img/javascript.svg',
    background: false,
  },
  argTypes: {
    children: { type: 'string' },
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
