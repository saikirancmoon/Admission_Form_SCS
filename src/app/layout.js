import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "../components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Sri Chaitanya Schools",
  description:
    "India's Most Advanced Educational Institution. Shaping bright futures with academic excellence.",
  icons: {
    icon: "/images/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
