'use client';

import { useState, useMemo } from 'react';
import type { CountryWithTotal, SortField, SortState } from '../lib/types';

interface UseMedalSortReturn {
  sortedCountries: CountryWithTotal[];
  currentSort: SortState;
  handleSort: (field: SortField) => void;
}

export function useMedalSort(countries: CountryWithTotal[]): UseMedalSortReturn {
  const [currentSort, setCurrentSort] = useState<SortState>({
    field: 'total',
    direction: 'desc'
  });

  const handleSort = (field: SortField) => {
    setCurrentSort(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const sortedCountries = useMemo(() => {
    if (!countries.length) return [];

    return [...countries].sort((a, b) => {
      const aValue = a[currentSort.field];
      const bValue = b[currentSort.field];
      
      if (aValue === bValue) {
        // If values are equal, use total medals as secondary sort
        if (currentSort.field !== 'total') {
          return b.total - a.total;
        }
        // If totals are equal, sort by name
        return a.name.localeCompare(b.name);
      }

      return currentSort.direction === 'desc' ? bValue - aValue : aValue - bValue;
    });
  }, [countries, currentSort]);

  return {
    sortedCountries,
    currentSort,
    handleSort
  };
}
