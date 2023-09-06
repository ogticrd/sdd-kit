import type { Meta, StoryObj } from "@storybook/react";

import LoadingBackdrop from "../components/loadingBackdrop";

const meta = {
  title: "Example/LoadingBackdrop",
  tags: ["autodocs"],
  component: LoadingBackdrop,
} satisfies Meta<typeof LoadingBackdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    text: "",
  },
};
