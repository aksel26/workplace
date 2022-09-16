import Typo from "../components/UI/atoms/Typo";

export default {
  title: "atoms/Text",
  component: Typo,
  args: {
    type: "primary",
    text: "아놔",
  },
};

export const Default = (args) => <Typo {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   type: "primary",
//   text: "아놔",
// };
