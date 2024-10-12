import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "first app",
  description: "copyright©️mujtaba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} place-items-center antialiased m-8 grid gap-20`}
      >
        <div className="Nav-bar flex justify-between w-full items-start">
          <div className="log-taps flex gap-14">
            <Link href='/'>
            <Image src="logo.svg" alt="#"
            width={90}
            height={4}/>
            </Link>
              <ul className="taps flex gap-10">
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer font-semibold hover:text-black">Features <Image src='/icon-arrow-down.svg' alt="#" height={13} width={13}/>
                  
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer font-semibold hover:text-black">Company <Image src='/icon-arrow-down.svg' alt="#" height={13} width={13}/>
                
                </li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer font-semibold hover:text-black">Careers</li>
                <li className="flex items-center gap-2 text-gray-500 cursor-pointer font-semibold hover:text-black">About</li>
              </ul>
          </div>
            <div className="logs flex gap-8 items-center">
              <Link href='Login' className="font-semibold">Login</Link>
              <Link href='Signup' className="px-5 py-2 border-2 font-semibold border-gray-600 rounded-2xl">Register</Link>
            </div>
        </div>


        {children}
      </body>
    </html>
  );
}
