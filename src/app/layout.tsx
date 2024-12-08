import { ThemeProvider } from "./components/theme-provider";
import Header from './components/Header'
import Navbar from "./components/Navbar";
import Logo from "./components/Logo"
import Hero from "./components/Hero"
import Product from "./components/Product"

import { ReactNode } from 'react'
import  './globals.css';

export default function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <Logo/> 
          <Navbar/>
          <Hero/>
          <Product/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
