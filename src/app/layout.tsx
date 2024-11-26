// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "SystemERoar",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar /> {/* Moved Navbar outside of the main container */}
        </ AuthProvider>
      </body>
    </html>
  );
}