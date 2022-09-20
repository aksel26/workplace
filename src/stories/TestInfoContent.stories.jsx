import TestInfoStatus from "../components/UI/molcules/TestInfoStatus";

export default {
  title: "molcules/TestInfoStatus",
  component: TestInfoStatus,
};

const Template = (args) => <TestInfoStatus {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   label: "This is Example",
//   variant: "filled",
//   color: "primary",
//   size: "medium",
// };
