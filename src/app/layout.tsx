import {Comfortaa} from "next/font/google";
import "./globals.css";
import GoogleTagManager from '@magicul/next-google-tag-manager'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FacebookPixel } from "@/components/FacebookPixel";

const comfortaa = Comfortaa({ 
  subsets: ["cyrillic"], 
  weight: ['300', '400', '500', '600', '700'],
  display: "swap"
 })



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       {/* <FacebookPixel /> */}
       <script src="https://www.youtube.com/iframe_api" async ></script>

      <body className={`${comfortaa.className}`}>
        {/* <GoogleTagManager id='GTM-MTBLB66' /> */}
      
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        <script async src="https://static.sppopups.com/assets/loader.js" data-chats-widget-id="a21c2ba7-130d-4cf7-8884-5a7d717f470f"></script>
      </body>
    </html>
  );
}
