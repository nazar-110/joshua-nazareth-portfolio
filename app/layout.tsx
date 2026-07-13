import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://nazar-110.github.io/joshua-nazareth-portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Joshua Nazareth — Robotics & Autonomous Systems",
  description:
    "Portfolio of Joshua Nazareth: robotics, autonomous navigation, LiDAR perception, sensor fusion, ROS 2, and applied machine learning.",
  applicationName: "Joshua Nazareth Portfolio",
  authors: [{ name: "Joshua Nazareth", url: "https://github.com/nazar-110" }],
  keywords: [
    "Joshua Nazareth",
    "robotics",
    "autonomous systems",
    "ROS 2",
    "LiDAR",
    "PyTorch",
    "machine learning",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Joshua Nazareth — Systems that perceive, decide, and move",
    description:
      "Robotics and autonomous-systems projects across perception, planning, navigation, and simulation.",
    siteName: "Joshua Nazareth Portfolio",
    images: [
      {
        url: "og.png",
        width: 1672,
        height: 941,
        alt: "Joshua Nazareth — Systems that perceive, decide, and move",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Nazareth — Robotics & Autonomous Systems",
    description: "Systems that perceive, decide, and move.",
    images: ["og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
