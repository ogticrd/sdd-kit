import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../components/header";

const meta = {
  title: "Example/Header",
  tags: ["autodocs"],
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

import Logo from "./assets/logoOGTIC.png";

export const playground: Story = {
  args: {
    logo: Logo.src,
    logoWidth: 150,
  },
};
