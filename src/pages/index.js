import HomeMain from "@/components/home/HomeMain";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <HomeMain />
    </main>
  );
}
