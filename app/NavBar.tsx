"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { id: 1, label: "HJÄLPPROJEKT", href: "/aid-projects" },
    { id: 2, label: "LOVSÅNG", href: "/worship" },
    { id: 3, label: "SÅNGER", href: "/worship/songs" },
  ];
  return (
    <nav className="flex space-x-6 px-5">
      <Link href="/">
        <Image
          className="rounded-full"
          src="/ElimLogo.svg"
          alt="Elim logo"
          width={100}
          height={100}
          priority
        ></Image>
      </Link>
      <ul className="flex space-x-4 border-b mb-5 px-5 h-20 items-center">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={classnames({
              "bg-slate-600 text-slate-100": link.href === currentPath,
              "bg-slate-300 text-slate-500": link.href !== currentPath,
              "border rounded-md px-2 py-1 bg-slate-800 hover:bg-slate-100 hover:text-slate-900 transition-colors":
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
