import { Inter } from "next/font/google";
import "./globals.css";
import "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
