import * as React from 'react';
import MUIPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export interface IProps {
  currentPage: number
  totalPages: number;
  shape?: 'rounded' | 'circular';
  variant?: 'text' | 'outlined';
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const Pagination = ({
  totalPages,
  onChange,
  shape = 'rounded',
  variant = 'text',
}: IProps) => {

  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    onChange(event, value);
  };

  return (
    <MUIPagination count={totalPages} variant={variant} shape={shape} page={currentPage} onChange={onChangePage} />

  );
}
