import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Wellness — Fisioterapia & Salud Integral",
  description:
    "Recupera tu movilidad y vive sin dolor en pocas sesiones. Fisioterapia especializada, rehabilitación deportiva y planes personalizados. Agenda tu cita por WhatsApp.",
  keywords: [
    "fisioterapia",
    "rehabilitación",
    "fisioterapia deportiva",
    "masaje terapéutico",
    "dolor de espalda",
    "Aura Wellness",
    "salud integral",
  ],
  authors: [{ name: "Aura Wellness" }],
  openGraph: {
    title: "Aura Wellness — Fisioterapia & Salud Integral",
    description:
      "Fisioterapia especializada y planes de rehabilitación personalizados. Tratamiento directo al origen de tu molestia.",
    siteName: "Aura Wellness",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Wellness — Fisioterapia & Salud Integral",
    description:
      "Recupera tu movilidad y vive sin dolor en pocas sesiones.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
