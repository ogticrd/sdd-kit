import React, { ChangeEvent, useState } from 'react';
import MUIPagination from '@mui/material/Pagination';

export interface PaginationProps {
  color?: 'primary' | 'secondary' | 'standard';
  currentPage: number;
  totalPages: number;
  shape?: 'rounded' | 'circular';
  variant?: 'text' | 'outlined';
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const Pagination = ({
  color = 'primary',
  totalPages,
  onChange,
  shape = 'rounded',
  variant = 'text',
}: PaginationProps) => {

  const [currentPage, setCurrentPage] = useState(1);

  const onChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    onChange(event, value);
  };

  return (
    <MUIPagination color={color} count={totalPages} variant={variant} shape={shape} page={currentPage} onChange={onChangePage} />
  );
}
