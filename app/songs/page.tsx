import { Box, Button, Grid, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { prisma } from "../../prisma/client";
import { GoPencil } from "react-icons/go";
import { RiAddLargeFill, RiPagesLine } from "react-icons/ri";
import DeleteSongButton from "@/app/components/DeleteSongButton";

const SongsPage = async () => {
  const songs = await prisma.song.findMany();
  return (
    <>
      <div className="flex items-center mb-5 space-x-10">
        <h1 className="text-3xl font-bold">SÅNGLISTOR</h1>
        <div>
          <Button variant="surface">
            <Link href="songs/new">LÄGG TILL LISTA</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center mb-5 space-x-10">
        <h1 className="text-3xl font-bold">SÅNGER</h1>
        <div>
          <Button variant="surface">
            <Link href="songs/new">LÄGG TILL SÅNG</Link>
          </Button>
        </div>
      </div>
      <div className="max-w-2xl">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>TITEL</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                TEXT
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {songs.map((song) => (
              <Table.Row key={song.id}>
                <Table.Cell>{song.title}</Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  {song.text}
                </Table.Cell>
                <Table.Cell>
                  <Button color="jade" variant="surface">
                    <RiAddLargeFill size={20} />
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Link href={`/songs/${song.id}`}>
                    <Button color="gray" variant="surface">
                      <RiPagesLine size={20} />
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link href={`/songs/${song.id}/edit`}>
                    <Button color="gray" variant="surface">
                      <GoPencil size={20} />
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <DeleteSongButton id={song.id}></DeleteSongButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  );
};

export default SongsPage;
