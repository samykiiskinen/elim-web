import { prisma } from "@/prisma/client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user) notFound();
  return (
    <>
      <div>
        <p>{`Namn: ${user.name}`}</p>
        <p>{`Role: ${user.role}`}</p>
        <p>{`Skapad: ${user.createdAt.toDateString()}`}</p>
        <p>{`Uppdaterad: ${user.updatedAt.toDateString()}`}</p>
      </div>
      <div className="mt-5">
        <Link href="/users">
          <Button variant="surface">TILLBAKA</Button>
        </Link>
      </div>
    </>
  );
};

export default UserDetailPage;
