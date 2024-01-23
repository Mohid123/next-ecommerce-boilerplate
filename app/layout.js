import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Boilerplate",
  description: "E-Commerce Boilerplate by Mohid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="mt-36">
          {children}
        </main>
      </body>
    </html>
  );
}
