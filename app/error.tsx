'use client';

import { useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 3
        }}
      >
        <ErrorIcon color="error" sx={{ fontSize: 64 }} />
        
        <Typography variant="h4" component="h1" gutterBottom>
          Something went wrong!
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          We apologize for the inconvenience. An error has occurred while loading the page.
        </Typography>
        
        <Button
          variant="contained"
          onClick={reset}
          size="large"
        >
          Try Again
        </Button>
      </Box>
    </Container>
  );
}
