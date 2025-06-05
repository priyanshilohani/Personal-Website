import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Priyanshi's Portfolio",
  description: "Personal portfolio showcasing AI and Web projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
