import './globals.css';

export const metadata = {
  title: 'SwitchtoDevOps',
  description: 'Live DevOps Course — Get Hired as a DevOps Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
