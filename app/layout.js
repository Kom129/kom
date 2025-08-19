import './globals.css'

export const metadata = {
  title: 'PAZOLINI Shop'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="max-w-2xl mx-auto p-4">
        {children}
      </body>
    </html>
  )
}
