import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../components/table";

const meta = {
  title: "Example/Table",
  tags: ["autodocs"],
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    columns: [
      { id: 'column1', label: 'Columna 1', align: 'center', minWidth: 200 },
      { id: 'column2', label: 'Columna 2', align: 'center', minWidth: 200 },
      { id: 'column3', label: 'Columna 1 + 2', align: 'center', minWidth: 400, cellRenderer: (row: any) => <div>{row.column1} + {row.column2}</div> }
    ],
    rows: [
      {
        column1: 'Datos de la Columna 1',
        column2: 'Datos de la Columna 2'
      },
      {
        column1: 'Datos de la Columna 1',
        column2: 'Datos de la Columna 2'
      }
    ]
  },
};
