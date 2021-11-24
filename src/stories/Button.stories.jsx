import React from 'react';

import { Button } from 'components/common/index';

export default {
  title: 'Common/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args} >Test</Button>;

export const Primary = Template.bind({});
// Primary.args = {
// 	secondary: false
// };

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Large = Template.bind({});
Large.args = {
  large: true,
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
