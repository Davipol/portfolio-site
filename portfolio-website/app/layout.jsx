import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Davide Polizzi | Software Developer",
  description:
    "Portfolio website of Davide Polizzi, a software developer based in London.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[url('/pictures/synth-border.jpg')] bg-cover bg-fixed min-h-screen flex flex-col">
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    </html>
  );
}
