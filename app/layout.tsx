import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RegisterProvider } from "./components/RegisterContext";
import { ToasterProvider } from "@/providers/toast-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REGISTRATION | IEEESBUOM",
  description: "IEEE SB UOM REGISTRATION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
