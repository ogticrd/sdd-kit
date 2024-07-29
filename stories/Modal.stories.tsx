// modal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Modal } from "../components/modal";

const meta = {
  title: "Example/Modal",
  tags: ["autodocs"],
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalStoryContainer: React.FC<{ open: boolean, title: string, children: React.ReactNode }> = ({ open, title, children }) => {
  const [openModal, setOpenModal] = React.useState(open);

  const handleModal = () => setOpenModal(!openModal);

  return (
    <div>
      <button onClick={handleModal}>Open Modal</button>
      <Modal open={openModal} onClose={handleModal} title={title}>
        {children}
      </Modal>
    </div>
  );
};

export const playground: Story = {
  render: (args) => <ModalStoryContainer {...args} />,
  args: {
    open: false,
    title: "Título del modal",
    children: "Contenido",
  },
};
