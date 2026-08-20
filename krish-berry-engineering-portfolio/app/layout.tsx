import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krish Berry | Robotics & Mechatronics Engineer",
  description: "Engineering portfolio of Krish Berry, a Robotics and Mechatronics Engineering student specialising in mechanical CAD and autonomous systems.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
