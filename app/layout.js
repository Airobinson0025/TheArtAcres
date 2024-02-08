import './globals.css'
import Navbar from './components/Navbar'



export const metadata = {
  title: 'The Art Acres',
  description: 'Sell your art online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
