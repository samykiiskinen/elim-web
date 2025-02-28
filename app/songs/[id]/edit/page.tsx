import React from "react";
import SongForm from "../../_components/SongForm";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const EditSongPage = async ({ params }: Props) => {
  const { id } = await params;
  const song = await prisma.song.findUnique({
    where: { id: parseInt(id) },
  });
  if (!song) notFound();
  return <SongForm song={song} />;
};

export default EditSongPage;
