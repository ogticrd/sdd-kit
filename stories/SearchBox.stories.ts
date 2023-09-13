import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/SearchBox",
  tags: ["autodocs"],
  component: SearchBox,
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

import SearchBox from "../components/searchbox";

export const playground: Story = {
  args: {
    onSearch: (value) => alert("Usted ha buscado: " + value),
  },
};
