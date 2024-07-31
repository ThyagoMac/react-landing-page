import { GridContent } from '.';

export default {
  title: 'GridContent',
  component: GridContent,
  args: {
    children: 'GridContent',
    title: 'ttest',
    background: false,
  },
  argTypes: {
    children: { type: 'string' },
    title: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args}>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          accusamus, quas sunt officia laudantium at, maxime est magnam
          excepturi possimus dolorum voluptatibus culpa. Debitis laboriosam
          deleniti corrupti iusto ea ipsa?
        </div>
        <a href="#">um link</a>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ducimus illo, delectus rem consequatur labore molestias quo
          voluptatibus ex voluptas <a href="#">um link</a> tempore nam
          repudiandae. Labore laboriosam ut cum dolorum totam qui?
        </p>
      </GridContent>
    </div>
  );
};
