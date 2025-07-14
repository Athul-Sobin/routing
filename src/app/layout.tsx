"use client";
import Link from 'next/link';
import './globals.css';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === '/' ? 'active-link' : 'inactive-link'}
        
      >
        Home
      </Link>{" |"}
      <Link
        href="/about"
        className={pathname === '/about' ? 'active-link' : 'inactive-link'}
        
      >
        About
      </Link>{" |"}
      <Link
        href="/contact"
        className={pathname === '/contact' ? 'active-link' : 'inactive-link'}
      >
        Contact
      </Link>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '20px', background: '#111', color: '#fff' }}>
          <Nav />
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
