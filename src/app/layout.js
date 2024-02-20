"use client"

import Header from "@/utils/Header";
import "./globals.css";
import { AppContextProvider } from "@/context/Context";
import Feed from "@/Feed/Feed";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#C8C8C8]">
        <AppContextProvider>
          <header className="">
            <Header />
          </header>
          <div className="h-full">
            <Feed />
          </div>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
