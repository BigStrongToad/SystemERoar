import type { Metadata } from "next";
import './globals.css';
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "SnapZoška",
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
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
        </div>
        {/* Fixed position Navbar at the bottom of the screen */}
        <NavbarWrapper />
      </body>
    </html>
  );
}

// A wrapper for the Navbar with fixed bottom positioning
function NavbarWrapper() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',  // Ensure the Navbar stretches across the screen
      zIndex: 1000,  // Keeps it above other content
      display: 'flex',
      justifyContent: 'center', // Center the Navbar horizontally
    }}>
      <Navbar />
    </div>
  );
}
