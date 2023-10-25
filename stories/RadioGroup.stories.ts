import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "../components/radioGroup";

const meta = {
  title: "Example/RadioGroup",
  tags: ["autodocs"],
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
    disabled: true,
  },
  {
    label: "Option 3",
    value: "option3",
  },
  {
    label: "Option 4",
    value: "option4",
  },
];

export const playground: Story = {
  args: {
    options: options,
    label: "Select an option",
    value: "option1",
    onChange: (v) => {
      console.log(v);
    },
  },
};
