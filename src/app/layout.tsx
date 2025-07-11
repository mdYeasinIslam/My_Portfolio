import { Navbar } from "@/SharedComponent/Navbar";
import "./globals.css";

export const metadata = {
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
      </body>
    </html>
  );
}
