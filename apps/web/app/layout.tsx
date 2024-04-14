'use client'
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import SessionProvider from "./../components/SesseionProvider";
import '@mantine/core/styles.css';
import { createTheme } from '@mantine/core'

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'primary',
  colors: {
    primary: [
      '#F1F2F4',
      '#C5C8D6',
      '#9CA1C1',
      '#727CB6',
      '#4857B3',
      '#2D3FA7',
      '#1428A0',
      '#1F2B74',
      '#232A56',
      '#222641',
    ],
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
    <head>
      <link rel='shortcut icon' href='/favicon.ico'/>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'/>
    </head>
    <body>
    <SessionProvider>
      <ColorSchemeScript defaultColorScheme='auto'/>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </SessionProvider>
    </body>
    </html>
  );
}
