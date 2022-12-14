import { InputAdornment } from "@mui/material";
import TextInput from "../components/UI/atoms/TextInput";

export default {
  title: "atoms/TextInput",
  component: TextInput,
  argTypes: {
    color: {
      options: ["success", "secondary", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["outlined", "standard"],
      control: { type: "radio" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Enter your Email",
  variant: "standard",
  color: "success",
  content: "",
  // sx: { width: "15rem" },
  size: "small",
};
