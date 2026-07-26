// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

// const NavBar = () => {
//   //Navigation bar links
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Education", href: "/education" },
//     { name: "Skills", href: "/skills" },
//     { name: "Experience", href: "/experience" },
//     { name: "Projects", href: "/projects" },
//     { name: "Platforms", href: "/platforms" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0 text-white font-bold text-xl">
//               My Portfolio
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
//                       usePathname() === link.href ? "bg-gray-900" : ""
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014]/60 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            PD
          </div>
          <span className="text-xl font-semibold tracking-wide text-white">
            Pawan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Dake
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`relative group py-2 text-[15px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-purple-300"
                      : "text-gray-300 hover:text-purple-300"
                  }`}
                >
                  {link.name}

                  {/* Expanding Line from Center */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>

                  {/* Glowing Center Circle */}
                  <span
                    className={`absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.8)] transition-all duration-300 ease-out z-10 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-gray-200 bg-transparent border border-gray-600 rounded-lg hover:border-indigo-400 hover:text-white transition-all duration-300 group">
            Download CV
            <Download
              size={16}
              className="group-hover:translate-y-[2px] transition-transform"
            />
          </button>

          <button className="p-2.5 text-gray-400 bg-transparent border border-gray-600 rounded-lg hover:border-indigo-400 hover:text-white transition-all duration-300">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
