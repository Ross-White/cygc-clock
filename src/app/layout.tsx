import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: "CYGC Clock",
  description: "Keeping track of members' movements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
          <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
