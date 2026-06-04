import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MenuScan – OCR Paper Menus Into Digital Format",
  description: "Convert photos of paper menus into structured digital menus for delivery platforms automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec6389d1-20f1-4eca-bd3f-48e526a660b2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
