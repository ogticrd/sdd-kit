import type { Meta, StoryObj } from "@storybook/react";

import Header from "../components/header";

import Logo from "./assets/logoGOB.png";

const meta = {
  title: "Example/Header",
  tags: ["autodocs"],
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    logo: Logo,
    logoWidth: 150,
  },
};
