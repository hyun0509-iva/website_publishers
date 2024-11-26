import type { Metadata } from "next";
import Header from "./_components/layouts/Header";
import Footer from "./_components/layouts/Footer";
import { ScrollProvider } from "./_components/common/ScrollContext";
import "./globals.css";
export const metadata: Metadata = {
  title: "DHYUN",
  description: "회사 랜딩 페이지 샘플",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ScrollProvider>
          <Header />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
