import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "AID PROJECTS", href: "/aid-projects" },
    { label: "WORSHIP", href: "/worship" },
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
          <li>
            <Link
              key={link.href}
              href={link.href}
              className="border rounded-md p-1 hover:text-zinc-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
