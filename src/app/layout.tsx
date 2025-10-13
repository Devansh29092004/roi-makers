// Root layout required by Next.js
import './globals.css';
import { NavbarDemo } from '@/components/global/Navbar';
import FloatingDockDemo from '@/components/navigation/MobileNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>
        <NavbarDemo />
        {children}
        <FloatingDockDemo />
      </body>
    </html>
  );
}
