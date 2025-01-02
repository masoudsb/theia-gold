// "use client"

// import Link from "next/link";


// export default function Nav() {
//   const handleScroll = (id: string): void => {
//     const element = document.getElementById(id);
//     if (element) {
  //       const topOffset = element.offsetTop;
//       window.scrollTo({
//         top: topOffset,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <header className="header flex">
//       <h1 className="logo">
//         <Link href={"/"}>Theia Gold</Link>
//       </h1>
//       <nav className="flex ">
//         <Link  href="/dash" >Dashboard</Link>
//         <a onClick={()=>handleScroll("about")} className="cursor-pointer">About Us</a>
//         <a onClick={()=>handleScroll("footer")} className="cursor-pointer">Contact Us</a>
//       </nav>
//       <div className="flex sign">
//         <Link href="/login">Sign In / Register</Link>
//       </div>
//     </header>
//   );
// }


"use client";

import "../style/navStyle.css";
import Link from "next/link";
import { useState, useEffect  } from "react";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false); 
    };

    if (isMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, [isMenuOpen]);




  const handleScroll = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };
  return (
    <header className="bg-[#1C1C1CCC] backdrop-blur-md w-full fixed top-0 left-0 z-50 px-8 lg:px-16 h-14 sm:h-20 flex justify-between items-center opacity-95">
      <h1 className="text-3xl font-bold text-[#F76808] logo">
        <a onClick={() => handleScroll("head")} className="cursor-pointer logo">Theia Gold</a>
      </h1>
      <nav className="hidden sm:flex justify-between items-center space-x-6 text-white text-sm sm:text-base font-medium">
        <Link href="/dash">Dashboard</Link>
        <a onClick={() => handleScroll("about")} className="cursor-pointer">
          About Us
        </a>
        <a onClick={() => handleScroll("footer")} className="cursor-pointer">
          Contact Us
        </a>
      </nav>
      <div className="hidden sm:block text-white text-sm sm:text-base font-semibold sign">
        <Link href="/login">Sign In / Register</Link>
      </div>
      <div className="sm:hidden flex items-center">
        <button
          className="text-white text-2xl mr-2"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
    
          ☰
        </button>
        {isMenuOpen && (
          <div className="absolute right-4 top-16 bg-[#1C1C1C] text-white w-56 rounded-md shadow-lg  z-50">
            <ul className="flex flex-col space-y-4 p-4 ">
              <li>
                <Link href="/dash" onClick={() => setMenuOpen(false)}>
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  onClick={() => handleScroll("about")}
                  className="cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleScroll("footer")}
                  className="cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  Sign In / Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
