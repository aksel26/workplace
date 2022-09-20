import TestInfoBox from "../components/UI/organism/TestInfoBox";

export default {
  title: "organism/TestInfoBox",
  component: TestInfoBox,
};

const Template = (args) => <TestInfoBox {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   label: "This is Example",
//   variant: "filled",
//   color: "primary",
//   size: "medium",
// };
