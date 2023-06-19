import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'REDTRON',
  description: 'Casino Online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
      
      </body>
    </html>
  )
}
