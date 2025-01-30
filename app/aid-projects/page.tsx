import React from "react";
import { prisma } from "../../prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { RiPagesLine } from "react-icons/ri";

const AidProjectsPage = async () => {
  const projects = await prisma.project.findMany();
  return (
    <div>
      <div className="mb-3">
        <Button>
          <Link href="aid-projects/new">LÄGG TILL PROJEKT</Link>
        </Button>
      </div>
      <div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Datum</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden sm:table-cell">
                Konto
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Kontonamn
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Land</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Mottagare</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Ändamål</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Beslut</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Inbetalning</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Utbetalning</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Bilagor</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {projects.map((project) => (
              <Table.Row key={project.id}>
                <Table.Cell>{project.date}</Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  {project.accountNumber}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {project.accountName}
                </Table.Cell>
                <Table.Cell>{project.country}</Table.Cell>
                <Table.Cell>{project.receiver}</Table.Cell>
                <Table.Cell>{project.purpose}</Table.Cell>
                <Table.Cell>{project.decision}</Table.Cell>
                <Table.Cell>{project.income}</Table.Cell>
                <Table.Cell>{project.expense}</Table.Cell>
                <Table.Cell>
                  <Link href={`/aid-projects/${project.id}`}>
                    <Button>
                      <RiPagesLine size={30} className="cursor-pointer" />
                    </Button>
                  </Link>
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
