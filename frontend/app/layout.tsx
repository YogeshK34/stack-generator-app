import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Stack Generator",
  description: "Generate and share your tech stack cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@pictogrammers/css@~1/dist/pictogrammers.min.css"
        />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-purple-400 via-pink-500 to-red-500`}
      >
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
