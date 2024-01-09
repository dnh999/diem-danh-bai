import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/Layouts";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tính điểm đánh bài",
  description: "Tính điểm khi chơi bài nhanh chóng, không cần giấy bút",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
