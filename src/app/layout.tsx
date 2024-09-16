import {Comfortaa} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
       <script src="https://www.youtube.com/iframe_api" async ></script>

      <body className={`${comfortaa.className}`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      
      </body>
    </html>
  );
}
