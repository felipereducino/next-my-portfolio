import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transtitionProvider/transitionProvier";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reducino Dev Portfolio App",
  description: "The best animated Portfolio ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
