import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Artist – Official",
  description: "All music & content in one page.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
