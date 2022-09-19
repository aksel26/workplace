import LoginTemplate from "../components/templates/LoginTemplate";
import { theme } from "../themes/theme";

export default {
  title: "template/LoginTemplate",
  component: LoginTemplate,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <LoginTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Test",
  sx: {
    background: theme.palette.primary.light,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
