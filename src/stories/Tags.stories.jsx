import Tags from "../components/UI/atoms/Tags";

export default {
  title: "atoms/Tags",
  component: Tags,
  argTypes: {
    variant: {
      options: ["filled", "outlined"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      control: { type: "select" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Tags {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "This is Example",
  variant: "filled",
  color: "primary",
  size: "medium",
};
