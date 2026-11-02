import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LG-KOICA Hope TVET College",
  description:
    "Official website of LG-KOICA Hope TVET College. Explore technical education, departments, student life and admissions."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
