import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "RAIFEフューチャー株式会社 | 空間から、未来の暮らしをつくる。建築・リノベーション・店舗設計",
  description:
    "RAIFEフューチャー株式会社は、近畿地方を中心に上質な建設・建築、リフォーム・リノベーション、住宅設計、店舗設計を手掛けています。素材と光の質感を大切にした洗練された空間づくりをご提案します。",
  keywords: [
    "RAIFEフューチャー株式会社",
    "ライフフューチャー",
    "建築設計",
    "リフォーム",
    "リノベーション",
    "店舗設計",
    "近畿地方",
    "大阪",
    "京都",
    "兵庫",
  ],
  authors: [{ name: "RAIFEフューチャー株式会社" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://raife-future.example.com",
    title: "RAIFEフューチャー株式会社 | 建築・リフォーム・店舗設計",
    description:
      "空間から、未来の暮らしをつくる。近畿地方の建築・リノベーション・住宅・店舗設計。お客様の想いに寄り添う空間創造。",
    siteName: "RAIFEフューチャー株式会社",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAIFEフューチャー株式会社 | 建築・リフォーム・店舗設計",
    description: "空間から、未来の暮らしをつくる。近畿地方の建築・リノベーション・住宅・店舗設計。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F5F4F0] text-[#262626] font-sans antialiased selection:bg-[#8B8A7B]/20 selection:text-[#262626]">
        {children}
      </body>
    </html>
  );
}
