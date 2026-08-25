import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uzhavan One | Your next farm step",
  description: "A prototype service navigator for Indian farmers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
