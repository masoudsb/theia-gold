"use client";

import "../style/navStyle.css";
import Link from "next/link";

export default function Nav() {


  
  return (
    <header className="bg-[#1C1C1CCC] backdrop-blur-md w-full fixed top-0 left-0 z-50 px-8 lg:px-16 h-14 sm:h-20 flex justify-between items-center opacity-95">
      <h1 className="text-3xl font-bold text-[#F76808] logo">
        <Link href={"/"}  className="cursor-pointer logo">Theia Gold</Link>
      </h1>
      <nav className=" sm:flex justify-between items-center space-x-6 text-white text-sm sm:text-base font-medium">
        <Link href="/dash">Dashboard</Link>
        
      </nav>
      <div className=" sm:block text-white text-sm sm:text-base font-semibold sign">
        <Link href="/register">Register</Link>
      </div>
     
    </header>
  );
}
