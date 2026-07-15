import "./globals.css"
import LayoutWrapper from "@/components/layout/LayoutWrapper"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="th">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        
        <LayoutWrapper>

          {children}


        </LayoutWrapper>
      </body>

    </html>

  )
}