import Contact from "./components/Contact";
import Descr from "./components/Descr";
import { Poppins } from 'next/font/google';
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Solution from "./components/Solution";

export default function Home() {
  return ( 
    <main style={ { 'fontFamily': 'Poppins' }} className="flex min-w-screen flex-col items-center justify-between pt-3 ">
      <Contact />
      <Navbar />
      <Intro />
      <Solution/>
      <Descr />
    </main>
  );
}
