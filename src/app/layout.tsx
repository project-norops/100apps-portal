import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "⚡️ サクプラ by NOROPS",
  description: "100apps ポータルサイト - サクプラ by NOROPS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
