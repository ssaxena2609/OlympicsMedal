'use client';

import { useState, useEffect } from 'react';
import { Country, CountryWithTotal } from '../lib/types';

const API_URL = '/api/medals';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;
const REQUEST_TIMEOUT = 5000;

interface UseMedalsDataReturn {
  countries: CountryWithTotal[];
  error: string;
  loading: boolean;
  retry: () => Promise<void>;
}

export function useMedalsData(): UseMedalsDataReturn {
  const [countries, setCountries] = useState<CountryWithTotal[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = async (retryAttempt: number = 0): Promise<void> => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

      const response = await fetch(API_URL, {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Failed to fetch medal data');
      }

      const data = await response.json();
      
      if (!data || !Array.isArray(data.countries)) {
        throw new Error('Invalid data format received');
      }

      const countriesWithTotal = data.countries.map((country: Country) => ({
        ...country,
        total: country.gold + country.silver + country.bronze
      }));

      setCountries(countriesWithTotal);
      setError('');
      setRetryCount(0);
    } catch (err) {
      const error = err as Error;
      
      if (retryAttempt < MAX_RETRIES - 1) {
        setRetryCount(retryAttempt + 1);
        const delay = RETRY_DELAY * Math.pow(2, retryAttempt);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchData(retryAttempt + 1);
      }

      let errorMessage = 'Unable to load medal data. Please try again later.';
      if (error.name === 'AbortError') {
        errorMessage = 'Request timed out. Please try again.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection.';
      }

      setError(errorMessage);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const retry = async () => {
    setLoading(true);
    setError('');
    await fetchData();
  };

  return {
    countries,
    error,
    loading,
    retry
  };
}
