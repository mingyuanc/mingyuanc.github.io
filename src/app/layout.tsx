import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";

import "./globals.css";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ming Yuan",
  description: "Ming Yuan's personal portfolio website",
  icons: {
    icon: "../favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/simplebar/dist/simplebar.css"
        />
        <Script src="https://unpkg.com/simplebar/dist/simplebar.min.js" />
      </head>

      <body suppressHydrationWarning className="no-scrollbar scrollbar-hidden">
        <Toaster
          richColors
          position="bottom-right"
          expand={false}
          closeButton
        />

        {/* <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl"> */}
        <div className="w-full">
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
