import type { Metadata } from "next";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { Montserrat_Alternates } from "next/font/google";
import "./styles/globals.css";

const montserrat =  Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Pawfect Match",
  description: "Find your perfect pet partner!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-[url('/pawfectmatchbg.jpeg')] bg-cover bg-center">
        <AuthProvider>
          <FavoritesProvider>
          {children}
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
