import '../globals.css'


export const metadata = {
  title: 'Pesonal Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> {children}
        
       </body>
    </html>
  )
}
