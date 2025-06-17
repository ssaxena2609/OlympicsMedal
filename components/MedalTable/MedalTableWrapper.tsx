'use client';

import React from 'react';
import { Box, Paper, CircularProgress } from '@mui/material';
import TableHeader from './TableHeader';
import CountryRow from './CountryRow';
import { useMedalsData } from '../../hooks/useMedalsData';
import { useMedalSort } from '../../hooks/useMedalSort';

export default function MedalTableWrapper() {
  const { countries, error, loading, retry } = useMedalsData();
  const { sortedCountries, currentSort, handleSort } = useMedalSort(countries);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress size={32} sx={{ color: '#2c3e50' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Paper 
        elevation={0}
        sx={{ 
          p: 4, 
          textAlign: 'center',
          color: 'error.main',
          maxWidth: 800,
          margin: '0 auto',
          border: '1px solid #fee2e2',
          bgcolor: '#fef2f2',
          borderRadius: 2
        }}
      >
        <p style={{ marginBottom: '1rem', color: '#b91c1c' }}>{error}</p>
        <button 
          onClick={retry}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </Paper>
    );
  }

  if (!sortedCountries?.length) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: 'center',
          maxWidth: 800,
          margin: '0 auto',
          border: '1px solid #e5e7eb',
          borderRadius: 2
        }}
      >
        No medal data available.
      </Paper>
    );
  }

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        width: '100%',
        border: '1px solid #e5e7eb',
        borderRadius: 2
      }}
    >
      <Box className="table-container" sx={{ 
        width: '100%',
        overflowX: 'auto',
      }}>
        <Box sx={{ 
          minWidth: { xs: '100%', sm: 800 },
          '@media (max-width: 600px)': {
            '& td, & th': {
              px: 1,
              py: 1.5,
              fontSize: '0.875rem'
            }
          }
        }}>
          <TableHeader currentSort={currentSort} onSort={handleSort} />
          <Box>
            {sortedCountries.map((country) => (
              <CountryRow key={country.code} country={country} />
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
