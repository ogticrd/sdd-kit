import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "../components/accordion";

const meta = {
  title: "Example/Accordion",
  tags: ["autodocs"],
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {},
};
