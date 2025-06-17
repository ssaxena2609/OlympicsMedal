'use client';

import { Container, Box, Typography } from '@mui/material';
import MedalTableWrapper from '../components/MedalTable/MedalTableWrapper';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        py: 6, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 4
      }}>
        <Typography 
          variant="h4" 
          component="h1"
          sx={{
            fontWeight: 600,
            color: '#1a2027',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem' }
          }}
        >
          Olympic Medal Count
        </Typography>
        <MedalTableWrapper />
      </Box>
    </Container>
  );
}
