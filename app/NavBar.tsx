"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import { blue } from "@radix-ui/colors";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { id: 1, label: "HJÄLPPROJEKT", href: "/aid-projects" },
    { id: 2, label: "LOVSÅNG", href: "/worship" },
  ];
  return (
    <nav className="flex space-x-6 px-5 items-center">
      <Link href="/">
        <div className="w-full max-w-32 min-w-16 mx-auto">
          <Image
            className="rounded-full w-full h-auto p-1 hover:scale-105 hover:ease-in-out"
            src="/Logo.bmp"
            alt="Elim logo"
            width={80}
            height={80}
            priority
          ></Image>
        </div>
      </Link>
      <ul className="flex space-x-4 border-b mb-5 px-5 h-20 items-center">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={classnames({
              "bg-slate-600 text-slate-200": link.href === currentPath,
              "": link.href !== currentPath,
              "bg-slate-300 text-slate-700 font-bold border rounded-md px-2 py-1 text-2xl hover:bg-slate-200 hover:text-slate-700 hover:transition-colors hover:ease-in-out":
                true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
