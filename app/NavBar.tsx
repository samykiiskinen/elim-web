"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Box, Container, DropdownMenu, Flex, Text } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { id: 1, label: "LOVSÅNG", href: "/worship" },
    { id: 2, label: "HJÄLPPROJEKT", href: "/aid-projects" },
    { id: 3, label: "ANVÄNDARE", href: "/users" },
  ];
  return (
    <nav className="px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <div className="w-full max-w-32 min-w-16 mx-auto">
                <Image
                  className="rounded-full w-full h-auto p-1 hover:ease-in-out"
                  src="/Logo.bmp"
                  alt="Elim logo"
                  width={80}
                  height={80}
                  priority
                ></Image>
              </div>
            </Link>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user!.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">LOGGA UT</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link
                href="/api/auth/signin"
                className="bg-slate-300 text-slate-700 font-bold border-2 border-black rounded-md px-2 py-1 text-2xl hover:bg-slate-200 hover:text-slate-700 hover:transition-colors hover:ease-in-out"
              >
                LOGGA IN
              </Link>
            )}
            {status === "authenticated" && (
              <Link
                href="/api/auth/signout"
                className="bg-slate-300 text-slate-700 font-bold border-2 border-black rounded-md px-2 py-1 text-2xl hover:bg-slate-200 hover:text-slate-700 hover:transition-colors hover:ease-in-out"
              >
                LOGGA UT
              </Link>
            )}
          </Box>
        </Flex>
      </Container>
      <ul className="flex space-x-4 border-b mb-5 px-5 h-20 items-center">
        {status === "authenticated" &&
          links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={classnames({
                  "": link.href === currentPath,
                  "": link.href !== currentPath,
                  "bg-slate-300 text-slate-700 font-bold border-2 border-black rounded-md px-2 py-1 text-2xl hover:bg-slate-200 hover:text-slate-700 hover:transition-colors hover:ease-in-out":
                    true,
                })}
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
