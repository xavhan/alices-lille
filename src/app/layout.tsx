import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GOOGLE_MAPS_URL } from "@/data/links";
import { GoogleTagManager } from "@next/third-parties/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" translate="no">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${bebasNeue.className} antialiased flex flex-col h-full py-16 px-8 uppercase text-black`}
      >
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-8">
          <Header />
          {children}
        </div>
      </body>
      <GoogleTagManager gtmId="G-XJ7MWPFYFT" />
    </html>
  );
}

const Header = () => {
  return (
    <div className="flex flex-col text-center items-center gap-1">
      <Link href="/">
        <h1 className="text-5xl text-red">ALICES</h1>
      </Link>

      <h2 className="text-lg text-gold tracking-widest">
        Café • Bar • Saisonnier • Culturel
      </h2>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={GOOGLE_MAPS_URL}
        title="Voir sur Google Maps"
        className="underline"
      >
        <address className="not-italic">
          12 rue des 3 couronnes, 59000 Lille
        </address>
      </Link>
    </div>
  );
};
