import type { Metadata } from "next";

import "./globals.css";
import { CategoryProvider } from "@/context/CategoryContext";
import { ArticlesProvider } from "@/context/ArticlesContext";

export const metadata: Metadata = {
  title: "ITDevStaff Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ArticlesProvider>
        <CategoryProvider>
          <body>{children}</body>
        </CategoryProvider>
      </ArticlesProvider>
    </html>
  );
}
