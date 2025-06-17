'use client';

import React from 'react';
import { Box } from '@mui/material';
import type { CountryWithTotal } from '../../lib/types';

const cellStyle = {
  padding: '14px 16px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: 1,
  borderColor: 'divider',
  fontSize: '0.95rem'
};

interface CountryRowProps {
  country: CountryWithTotal;
}

export default function CountryRow({ country }: CountryRowProps) {
  return (
    <Box sx={{ 
      display: 'flex',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
      }
    }}>
      <Box sx={{ 
        flex: 2, 
        ...cellStyle, 
        fontWeight: 500,
        color: '#2c3e50'
      }}>
        {country.name}
      </Box>
      <Box sx={{ 
        flex: 1, 
        ...cellStyle, 
        justifyContent: 'center',
        color: country.gold > 0 ? '#2c3e50' : '#94a3b8'
      }}>
        {country.gold}
      </Box>
      <Box sx={{ 
        flex: 1, 
        ...cellStyle, 
        justifyContent: 'center',
        color: country.silver > 0 ? '#2c3e50' : '#94a3b8'
      }}>
        {country.silver}
      </Box>
      <Box sx={{ 
        flex: 1, 
        ...cellStyle, 
        justifyContent: 'center',
        color: country.bronze > 0 ? '#2c3e50' : '#94a3b8'
      }}>
        {country.bronze}
      </Box>
      <Box sx={{ 
        flex: 1, 
        ...cellStyle, 
        justifyContent: 'center',
        fontWeight: 500,
        color: '#2c3e50'
      }}>
        {country.total}
      </Box>
    </Box>
  );
}
