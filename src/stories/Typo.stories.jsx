import Typo from "../components/UI/atoms/Typo";

export default {
  title: "atoms/Text",
  component: Typo,
  argTypes: {
    text: "아놔",
    variant: {
      options: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
      control: { type: "radio" },
    },
    align: {
      options: [, "center", "inherit", "justify", "left", "right"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Typo {...args} />;

export const Text = Template.bind({});
Text.args = {
  text: "아놔",
};
