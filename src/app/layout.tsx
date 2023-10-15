"use client";

// Next
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

// Styles
import "./globals.css";

// MUI
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { Theme } from "@/theme/themes";

// React hook form
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const monaSans = localFont({
  src: "../../public/font/Mona-Sans.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const pathname = usePathname();

  return (
    <html lang="en" className="relative overflow-x-hidden scroll-smooth">
      <head>
        <title>Supattra Chansawad</title>
        <link rel="icon" href="/assets/static/logo/favicon.ico" />
      </head>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={Theme}>
            <CssBaseline />

            <body
              className={`${monaSans.className} relative -z-50 overflow-x-hidden bg-white-10`}
            >
              <Navbar isWhite={pathname == "/warmlight"} />
              {children}
              <Footer />
            </body>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </html>
  );
}
