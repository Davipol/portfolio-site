import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Davide Polizzi | Software Developer",
  description:
    "Portfolio website of Davide Polizzi, a junior software developer based in London.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
