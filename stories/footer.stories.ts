import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "../components/footer";

import logoOGTIC from "./assets/logoOGTIC.png";
import logoGOB from "./assets/logoGOB.png";

const meta = {
  title: "Example/Footer",
  tags: ["autodocs"],
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    logoDEV: logoOGTIC,
    logoDO: logoGOB,
  },
};
