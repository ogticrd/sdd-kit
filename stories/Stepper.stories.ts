import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "../components/stepper";

const meta = {
  title: "Example/Stepper",
  tags: ["autodocs"],
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const allSteps = () => {
  alert("OK");
};

export const playground: Story = {
  args: {
    stepsName: ["Paso 1", "Paso 2", "Paso 3", "Paso 4"],
    stepBackDisabled: false,
    stepNextDisabled: false,
    stepsContent: [
      "Contenido del paso 1",
      "Contenido del paso 2",
      "Contenido del paso 3",
      "Contenido del paso 4",
    ],
    allStepsComplete: allSteps,
  },
};
