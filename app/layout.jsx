import './globals.css';
import { Raleway } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Ingoude | Computer Account',
  description: 'Online Learning Courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
