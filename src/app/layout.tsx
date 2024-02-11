import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: ['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body className="dark">{children}</body>
    </html>
  )
}
