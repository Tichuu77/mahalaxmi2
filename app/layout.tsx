import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Mahalaxmi Developers - Premium Real Estate",
  description: "Discover premium real estate projects by Mahalaxmi Developers. A tradition of trust.",
  generator: "v0.app",
   icons: '/Mahalaxmi Infra new Logo.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${poppins.variable} font-poppins antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
