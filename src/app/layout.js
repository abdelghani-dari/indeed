import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Header from "@/components/Header";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indeed Settings",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Indeed </title>
      </head>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange >
            <Header />

            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
