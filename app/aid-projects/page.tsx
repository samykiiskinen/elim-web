import React from "react";
import { prisma } from "../../prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { RiPagesLine } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";

const AidProjectsPage = async () => {
  const projects = await prisma.project.findMany();
  return (
    <div>
      <div className="mb-3">
        <Button>
          <Link href="aid-projects/new">LÄGG TILL PROJEKT</Link>
        </Button>
      </div>
      <div className="max-w-4xl">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Datum</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Mottagare</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Ändamål
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Inbetalning</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Utbetalning</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Detaljer</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {projects.map((project) => (
              <Table.Row key={project.id}>
                <Table.Cell>{project.date}</Table.Cell>
                <Table.Cell>{project.receiver}</Table.Cell>
                <Table.Cell>{project.purpose}</Table.Cell>
                <Table.Cell>{project.income}</Table.Cell>
                <Table.Cell>{project.expense}</Table.Cell>
                <Table.Cell>
                  <Link href={`/aid-projects/${project.id}`}>
                    <Button color="gray" variant="surface">
                      <RiPagesLine size={20} />
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="gray" variant="surface">
                    <GoPencil size={20} />
                  </Button>
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

export default AidProjectsPage;
