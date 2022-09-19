import PasswordInput from "../components/UI/molcules/PasswordInput";

export default {
  title: "molcules/PasswordInput",
  component: PasswordInput,
  argTypes: {
    color: {
      options: ["success", "secondary", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["outlined", "standard"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Enter your Email",
  variant: "standard",
  color: "success",
  content: "",
};
