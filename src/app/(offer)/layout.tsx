import {Comfortaa} from "next/font/google"
import "../globals.css"
import GoogleTagManager from '@magicul/next-google-tag-manager'
import Header from "@/components/Header"
import Footer from "@/components/Car/Offer/Footer"
import { Suspense } from "react";
import ReactPixel from "@/components/FacebookPixel"

const comfortaa = Comfortaa({ 
  subsets: ["cyrillic"], 
  weight: ['300', '400', '500', '600', '700'],
  display: "swap"
 })

export default function OfferLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
       
       <script src="https://www.youtube.com/iframe_api" async ></script>
       <script async src="https://static.sppopups.com/assets/loader.js" data-chats-widget-id="a21c2ba7-130d-4cf7-8884-5a7d717f470f"></script>
      
      <body className={`${comfortaa.className}`}>
        <Suspense><GoogleTagManager id='GTM-MTBLB66' /></Suspense>  
        <main>
          <Header />
            {children}
          <Footer />
        </main>
        <Suspense><ReactPixel /></Suspense>
      </body>
    </html>
  );
}
