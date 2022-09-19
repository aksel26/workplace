import CheckBox from "../components/UI/atoms/CheckBox";

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

export const Default = Template.bind({});
Default.args = {
  checked: false,
};
