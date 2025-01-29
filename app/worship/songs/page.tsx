import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../prisma/client";

const SongsPage = async () => {
  const songs = await prisma.song.findMany();
  return (
    <div>
      <div className="mb-3">
        <Button>
          <Link href="songs/new">LÄGG TILL SÅNG</Link>
        </Button>
      </div>
      <div className="max-w-3xl">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Sångtitel</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                Sångtext
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Skapad
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {songs.map((song) => (
              <Table.Row key={song.id}>
                <Table.Cell>{song.title}</Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  {song.text}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {song.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default SongsPage;
