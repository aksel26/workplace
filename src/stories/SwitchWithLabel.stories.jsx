import SwitchWithLabel from "../components/UI/molcules/SwitchWithLabel";

export default {
  title: "molcules/SwitchWithLabel",
  component: SwitchWithLabel,
};

const Template = (args) => <SwitchWithLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Test",
};
