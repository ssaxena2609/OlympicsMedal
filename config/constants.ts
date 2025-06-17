export const CONFIG = {
  MAX_DISPLAYED_COUNTRIES: 12,
  DEFAULT_SORT: 'gold' as const,
  API_ENDPOINTS: {
    MEDALS_DATA: process.env.NEXT_PUBLIC_API_URL || '/api/medals'
  },
  ERROR_MESSAGES: {
    FETCH_ERROR: 'Unable to load medal data. Please try again later.',
    CONNECTION_ERROR: 'Unable to connect to the server. Please check your internet connection.',
    DATA_FORMAT_ERROR: 'There was a problem with the data format. Please try again later.',
    NO_DATA: 'No medal data available at this time.',
    TIMEOUT_ERROR: 'Request timed out. Please try again.',
    NOT_FOUND: 'The requested resource was not found.',
    SERVER_ERROR: 'A server error occurred. Please try again later.',
    INVALID_RESPONSE: 'Invalid response received from server.'
  }
} as const;
