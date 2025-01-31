import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../prisma/client";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin2Line, RiAddLargeFill, RiPagesLine } from "react-icons/ri";

const SongsPage = async () => {
  const songs = await prisma.song.findMany();
  return (
    <div>
      <div className="mb-3 space-x-2">
        <Button variant="surface">
          <Link href="songs/new">LÄGG TILL SÅNG</Link>
        </Button>
        <Button variant="surface">
          <Link href="/worship">TILLBAKA</Link>
        </Button>
      </div>
      <div className="max-w-2xl">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Sångtitel</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                Sångtext
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
                  <Link href={`/worship/songs/${song.id}`}>
                    <Button color="gray" variant="surface">
                      <RiPagesLine size={20} />
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link href={`/worship/songs/${song.id}/edit`}>
                    <Button color="gray" variant="surface">
                      <GoPencil size={20} />
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="tomato" variant="surface">
                    <RiDeleteBin2Line size={20} />
                  </Button>
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
