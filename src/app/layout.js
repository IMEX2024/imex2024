
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
