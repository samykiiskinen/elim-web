import { prisma } from "@/prisma/client";
import { Button, Link } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const SongDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const song = await prisma.song.findUnique({
    where: { id: parseInt(id) },
  });

  if (!song) notFound();
  return (
    <>
      <div>
        <p>{`Sångtitel: ${song.title}`}</p>
        <p>{`Sångtext: ${song.text}`}</p>
        <p>{`Skapad: ${song.createdAt.toDateString()}`}</p>
        <p>{`Uppdaterad: ${song.updatedAt.toDateString()}`}</p>
      </div>
      <div className="mt-5">
        <Link href="/worship/songs">
          <Button variant="surface">TILLBAKA</Button>
        </Link>
      </div>
    </>
  );
};

export default SongDetailPage;
