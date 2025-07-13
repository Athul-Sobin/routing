
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '20px', background: '#111', color: '#fff' }}>
          <nav>
            <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link> |{" "}
            <Link href="/about" style={{ textDecoration: 'none', color: '#fff' }}>About</Link> |{" "}
            <Link href="/contact" style={{ textDecoration: 'none', color: '#fff' }}>Contact</Link>
          </nav>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
