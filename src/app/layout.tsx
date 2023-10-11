'use client';

// Next
import { Inter } from 'next/font/google';

// Style
import './globals.css';

// MUI
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { Theme } from '@/theme/themes';

// React hook form
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang='en'>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={Theme}>
            <CssBaseline />
            <body className={inter.className}>{children}</body>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </html>
  );
}
