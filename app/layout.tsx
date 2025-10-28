import './globals.css';
export const metadata = { title: 'GDG Frontend', description: 'Take-home' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
