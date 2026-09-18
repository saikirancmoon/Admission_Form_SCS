import { Inter, Outfit, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import "../styles/design-tokens.css";
import "../styles/animations.css";
import LenisProvider from "../components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sri Chaitanya Schools | Premium Digital Experience",
  description: "India's Most Advanced Educational Institution. Shaping bright futures with academic excellence.",
  icons: {
    icon: "/images/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${plusJakarta.variable} ${poppins.variable}`}>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
