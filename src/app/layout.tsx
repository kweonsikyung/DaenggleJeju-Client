import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SWRProvider } from "@/components/providers/SWRProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "댕글제주",
  description: "15초 영상 추천 반려견 여행 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY ? (
          <Script
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&autoload=false&libraries=services,clusterer`}
            strategy="beforeInteractive"
          />
        ) : null}
        <SWRProvider>
          <div className="wrapper">{children}</div>
        </SWRProvider>
      </body>
    </html>
  );
}
