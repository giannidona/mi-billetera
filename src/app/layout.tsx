import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mi Billetera",
  description:
    "Aplicación web para gestionar ingresos, gastos y administrar tu vida financiera de manera sencilla y eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 antialiased`}>
        <div className="mx-auto h-screen w-[30%]">{children}</div>
      </body>
    </html>
  );
}
