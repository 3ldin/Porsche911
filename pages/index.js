import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-[#e9e8e8] justify-between w-full ${inter.className}`}
    >
      <Navbar />
      <Hero />
      <About />
      <Models />
      <Explore />
      <Footer />
    </main>
  );
}
