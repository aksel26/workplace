import InputComponent from "../components/UI/atoms/InputComponent";

export default {
  title: "atoms/InputComponent",
  component: InputComponent,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <InputComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Enter your Email",
  color: "primary",
  content: "",
};
