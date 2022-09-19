import SelectBox from "../components/UI/atoms/SelectBox";

export default {
  title: "atoms/SelectBox",
  component: SelectBox,
  argTypes: {
    variant: {
      options: ["outlined", "standard"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  label: "Text",
};
