import React from "react";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
  const navList: { name: string; href: string }[] = [
    { name: "work", href: "/work" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/contact" },
  ];
  return (
    <nav className="w-full h-full bg-white flex items-center justify-center container">
      <div className="flex justify-center items-center">
        <ul className="py-2 uppercase text-gray-500 flex">
          {navList.map((nav) => (
            <Link to="/">
              <li className="hover:border-b-[1px] hover:border-b-primary-100 border-b-transparent border-b-[1px] transition-all mx-4 px-4 py-1 font-bold text-lg">{nav.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
