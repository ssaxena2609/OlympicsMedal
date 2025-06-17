'use client';

import { Box } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import type { SortState, SortField } from '../../lib/types';

interface TableHeaderProps {
  currentSort: SortState;
  onSort: (field: SortField) => void;
}

const cellStyle = {
  fontWeight: 600,
  padding: '16px',
  cursor: 'pointer',
  userSelect: 'none' as const,
  display: 'flex',
  alignItems: 'center',
  color: '#444',
  fontSize: '0.9rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px'
};

const medalStyle = {
  width: 20,
  height: 20,
  borderRadius: '50%',
};

export default function TableHeader({ currentSort, onSort }: TableHeaderProps) {
  const SortArrow = ({ field }: { field: SortField }) => {
    if (currentSort.field !== field) return null;
    
    return currentSort.direction === 'desc' 
      ? <ArrowDownward sx={{ ml: 1, fontSize: '1rem' }} />
      : <ArrowUpward sx={{ ml: 1, fontSize: '1rem' }} />;
  };

  return (
    <Box sx={{ display: 'flex', borderBottom: '2px solid #eee', bgcolor: '#f8f9fa' }}>
      <Box sx={{ flex: 2, ...cellStyle }}>
        Country
      </Box>
      <Box 
        onClick={() => onSort('gold')}
        sx={{ flex: 1, ...cellStyle, justifyContent: 'center' }}
      >
        <Box sx={{ ...medalStyle, bgcolor: '#FFD700' }} />
        <SortArrow field="gold" />
      </Box>
      <Box 
        onClick={() => onSort('silver')}
        sx={{ flex: 1, ...cellStyle, justifyContent: 'center' }}
      >
        <Box sx={{ ...medalStyle, bgcolor: '#C0C0C0' }} />
        <SortArrow field="silver" />
      </Box>
      <Box 
        onClick={() => onSort('bronze')}
        sx={{ flex: 1, ...cellStyle, justifyContent: 'center' }}
      >
        <Box sx={{ ...medalStyle, bgcolor: '#CD7F32' }} />
        <SortArrow field="bronze" />
      </Box>
      <Box 
        onClick={() => onSort('total')}
        sx={{ flex: 1, ...cellStyle, justifyContent: 'center' }}
      >
        Total
        <SortArrow field="total" />
      </Box>
    </Box>
  );
}
