import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Society PC | Contact",
  description: "Local computer repair in Easton, Pennsylvania. "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <SpeedInsights/>
        {children}
      </body>
      <GoogleAnalytics gaId="G-7MM1MN02JX" />
    </html>
  );
}