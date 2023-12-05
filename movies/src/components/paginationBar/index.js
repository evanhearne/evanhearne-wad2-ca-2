import React from 'react';
import { Pagination } from '@mui/material';

const PaginationBar = ({ page, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      color="primary"
      size="large"
    />
  );
};

export default PaginationBar;
