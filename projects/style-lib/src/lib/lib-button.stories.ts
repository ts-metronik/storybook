import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { LibButtonComponent } from './lib-button.component';
import { LibButtonModule } from './lib-button.module';

export default {
  title: 'StyleLib/LibButtonComponent',
  component: LibButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [LibButtonModule],
    }),
  ],
} as Meta;

const Template: Story<LibButtonComponent> = (args: LibButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small',
};
