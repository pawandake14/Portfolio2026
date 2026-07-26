import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; // <-- This imports the Tailwind styles
import NavBar from "../components/NavBar"; // <-- Adjust the path if your component is elsewhere

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pawan Dake | Portfolio",
  description: "Crafting exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#030014] text-white antialiased min-h-screen flex flex-col`}
      >
        <NavBar />
        {/* Add padding top to account for the fixed navbar */}
        <main className="flex-grow pt-24 px-6">{children}</main>
      </body>
    </html>
  );
}
