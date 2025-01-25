import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Instruktur Senam Zumba Aerobik Jakarta - Lidya Zumba",
  description: "Temukan Instruktur Senam Zumba Aerobik Jakarta profesional untuk kelas menyenangkan dan bugar bersama Lidya! Sebagai Instruktur Zumba Jakarta berpengalaman, Lidya menawarkan sesi Senam Aerobik Jakarta yang energik dan seru. Bergabunglah dalam komunitas Zumba Jakarta untuk gaya hidup sehat dan aktif. Cari tahu jadwal Senam Jakarta dengan Lidya Zumba Jakarta dan Lidya Aerobik Jakarta untuk pengalaman senam terbaik!",
  type: "website",
  icons: {
    icon: "/squats.png",
    shortcut: "/squats.png",
    apple: "/squats.png",
  },
  openGraph: {
    title: "Instruktur Senam Zumba Aerobik Jakarta - Lidya Zumba",
    description: "instruktur Zumba dan Aerobik profesional di Jakarta, menawarkan kelas senam energik untuk gaya hidup sehat. Daftar sekarang!",
    images: [
      {
        url: "/squats.png",
        width: 800,
        height: 600,
        alt: "Instruktur Zumba Aerobik Jakarta",
      },
    ],
    url: "https://instukturzumbaaerobikjakarta.vercel.app/",
  },
  keywords: "Instruktur Zumba Jakarta, Senam Aerobik Jakarta, Zumba Jakarta, Senam Jakarta, Aerobik Jakarta",
  author: "Lidya Aerobik and Zumba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4Hve-GuRIBqZLbg3Jjm99kKGV3jkgqV1mIWS6FPx0b0" />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="canonical" href={metadata.openGraph.url} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Lidya Zumba Jakarta",
            "description": metadata.description,
            "image": metadata.openGraph.images[0].url,
            "url": metadata.openGraph.url,
            "telephone": "+6281288025956",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta",
              "addressCountry": "ID",
            },
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
