"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { id: 1, label: "AID PROJECTS", href: "/aid-projects" },
    { id: 2, label: "WORSHIP", href: "/worship" },
  ];
  return (
    <nav className="flex space-x-6 px-5">
      <Link href="/">
        <Image
          className="dark:invert rounded-full hover:animate-ping"
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
              "bg-slate-800": link.href === currentPath,
              "bg-slate-600": link.href !== currentPath,
              "text-slate-300": link.href !== currentPath,
              "border rounded-md px-2 py-1 bg-slate-800 hover:bg-slate-300 hover:text-cyan-900 transition-colors":
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
