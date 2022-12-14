import Switches from "../components/UI/atoms/Switches";

export default {
  title: "atoms/Switches",
  component: Switches,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
    },
    checked: {
      options: [true, false],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Switches {...args} />;

export const Default = Template.bind({});
Default.args = {};
