import { ErrorInfo } from 'react';

interface ErrorReport {
  error: Error;
  errorInfo?: ErrorInfo;
  location: string;
  timestamp: string;
  userAgent: string;
  componentStack?: string;
}

// Error reporting service with singleton pattern
class ErrorReportingService {
  private static instance: ErrorReportingService;
  private readonly MAX_STORED_ERRORS = 10;
  private errorStore: ErrorReport[] = [];

  private constructor() {
    // Initialize error reporting service
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Initialize production error tracking service here
      // e.g., Sentry.init({ dsn: process.env.NEXT_PUBLIC_SENTRY_DSN });
    }
  }

  public static getInstance(): ErrorReportingService {
    if (!ErrorReportingService.instance) {
      ErrorReportingService.instance = new ErrorReportingService();
    }
    return ErrorReportingService.instance;
  }

  public async reportError(report: ErrorReport): Promise<void> {
    if (typeof window === 'undefined') {
      // Server-side error handling
      console.error('Server-side error:', report);
      return;
    }

    if (process.env.NODE_ENV === 'production') {
      // Send to production error tracking service
      // e.g., Sentry.captureException(report.error, { extra: report });
      
      // For now, we'll store locally and send to console
      this.storeError(report);
    } else {
      console.error('Development Error:', report);
    }
  }

  private storeError(report: ErrorReport): void {
    if (typeof window === 'undefined') return;

    this.errorStore = [report, ...this.errorStore.slice(0, this.MAX_STORED_ERRORS - 1)];
    
    // You could also implement periodic sending to a backend here
    this.persistErrors();
  }

  private persistErrors(): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem('error_logs', JSON.stringify(this.errorStore));
    } catch (e) {
      console.error('Failed to persist errors to localStorage');
    }
  }

  public getStoredErrors(): ErrorReport[] {
    return this.errorStore;
  }

  public clearErrors(): void {
    this.errorStore = [];
    if (typeof window === 'undefined') return;

    try {
      localStorage.removeItem('error_logs');
    } catch (e) {
      console.error('Failed to clear error logs from localStorage');
    }
  }
}

export const errorReporting = ErrorReportingService.getInstance();
