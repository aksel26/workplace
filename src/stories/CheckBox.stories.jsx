import CheckBox from "./CheckBox";

export default {
  title: "atoms/CheckBox",
  component: CheckBox,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
    },
    checked: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <CheckBox {...args} />;

export const Text = Template.bind({});
Text.args = {
  checked: false,
};
