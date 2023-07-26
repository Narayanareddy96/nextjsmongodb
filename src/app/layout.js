import NavBar from '@/components/NavBar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next project with MongoDB',
  description: 'createing my first app with next js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar />
        <div className="flex-1 container mx-auto py-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
