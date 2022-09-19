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

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Text",
};

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
  label: "Text",
};
