import { Navbar } from "@/SharedComponent/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "M Yeasin",
  description: "Mohammad-Yeasin portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
