import './globals.css';

export const metadata = {
  title: 'Dovell | Voice Intelligence & Conversation Analytics',
  description: 'Organize audio recordings, review transcripts, explore conversation trends, and track outcomes with Dovell’s centralized voice analytics workspace.',
  keywords: 'Voice Intelligence, Conversation Analytics, Audio Recordings, Transcript Review, Customer Support Analytics, Dovell',
  authors: [{ name: 'Dovell' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
