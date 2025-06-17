# Olympic Medal Count App

A modern Next.js application for displaying Olympic medal counts with clean, responsive design.

## Features

- Clean, minimal interface
- Sort by gold, silver, bronze, or total medals
- Responsive design with mobile support
- Server-side data loading with error handling
- Client-side sorting and filtering
- Visual indicators for medal types
- Modern UI with Material Design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Technical Details

Built with:
- Next.js 13+ (App Router)
- React 18
- Material-UI
- TypeScript
- Server Components
- Client-side Hooks

### Directory Structure

```
├── app/                 # Next.js 13+ App Router
├── components/         # React components
│   └── MedalTable/    # Medal table components
├── hooks/             # Custom React hooks
├── lib/               # Types and utilities
└── public/            # Static assets
    └── data/         # Medal data
```

## Development

To modify the medal data, edit `public/data/medals.json`.

The table supports:
- Sorting by clicking column headers
- Responsive layout for all screen sizes
- Error states with retry functionality
- Loading states with progress indicator

## Styling

The application uses:
- Material-UI components
- Custom theme configuration
- Responsive design patterns
- Clean typography and spacing
- Visual indicators for medal types

## Error Handling

Includes:
- API error handling
- Loading states
- Retry mechanisms
- Fallback UI components
- Type-safe error boundaries
