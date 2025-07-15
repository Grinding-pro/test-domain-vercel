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
  metadataBase: new URL("https://www.zumbajakarta.com"),
  title: "Zumba & Aerobik Seru di Jakarta - Lidya Zumba",
  description: "Mau olahraga tapi malas yang ribet? Coba kelas Zumba & aerobik Jakarta bareng instruktur berpengalaman. Seru, sehat, cocok usia 20–45 tahun!",
  authors: [{ name: "Lidya Rachmawati" }],
  robots: "index, follow",
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
    url: "https://www.zumbajakarta.com/",
    siteName: "Instruktu Zumba Jakarta",
    locale: "id_ID",
    type: "website",
  },
  keywords: "Zumba Jakarta, Aerobik Jakarta, Instruktur Zumba Jakarta, Kelas Zumba Jakarta, Aerobik untuk pemula Jakarta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4Hve-GuRIBqZLbg3Jjm99kKGV3jkgqV1mIWS6FPx0b0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zumba & Aerobik Seru di Jakarta - Lidya Zumba" />
        <meta name="twitter:description" content="Mau olahraga tapi malas yang ribet? Coba kelas Zumba & aerobik Jakarta bareng instruktur berpengalaman. Seru, sehat, cocok usia 20–45 tahun!" />
        <meta name="twitter:image" content="/squats.png" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />


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
