import TextInput from "../components/UI/atoms/TextInput";

export default {
  title: "atoms/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  text: "Text",
};

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
  text: "Text",
};
