import Buttons from "../components/UI/atoms/Buttons";
import Typo from "../components/UI/atoms/Typo";

export default {
  title: "atoms/Button",
  component: Buttons,
};

const Template = (args) => <Buttons {...args} />;

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  text: "Text",
};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  text: "Contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "contained",
  text: "Contained",
  primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  text: "Contained",
  primary: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  text: "Outlined",
};
