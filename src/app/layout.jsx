import './globals.css';

export const metadata = {
  title: 'Dovell AI | Autonomous Enterprise Knowledge & GPU Optimization Platform',
  description: 'Dovell AI connects enterprise silos, maps dependencies, and navigates complex relationships with GPU-accelerated relationship analytics and autonomous compute optimization.',
  keywords: 'Dovell AI, Knowledge Graph, Enterprise Silos, GPU Slicing, AI Resource Optimization, Cloud AI Infrastructure',
  authors: [{ name: 'Dovell Technologies' }],
  icons: {
    icon: '/favicon.ico',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
