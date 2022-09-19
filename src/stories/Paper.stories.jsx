import PaperContainer from "../components/UI/atoms/PaperContainer";

export default {
  title: "atoms/PaperContainer",
  component: PaperContainer,
  argTypes: {
    elevation: {
      options: [1, 2, 3],
      control: { type: "radio" },
    },
    square: {
      options: [true, false],
      control: { type: "radio" },
    },
    variant: {
      options: ["elevation", "outlined"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PaperContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
  content: "This is Example",
  elevation: 1,
  square: false,
  variant: "elevation",
};
