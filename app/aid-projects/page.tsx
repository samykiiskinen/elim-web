import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin2Line, RiPagesLine } from "react-icons/ri";
import { prisma } from "../../prisma/client";
import EditProjectButton from "./[id]/EditProjectButton";

const AidProjectsPage = async () => {
  const projects = await prisma.project.findMany();
  return (
    <div>
      <div className="mb-3">
        <Button variant="surface">
          <Link href="aid-projects/new">LÄGG TILL PROJEKT</Link>
        </Button>
      </div>
      <div className="max-w-4xl">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>DATUM</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>MOTTAGARE</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                ÄNDAMÅL
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>INBETALNING</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>UTBETALNING</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>DETALJER</Table.ColumnHeaderCell>
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
                  <EditProjectButton projectId={project.id} />
                </Table.Cell>
                <Table.Cell>
                  <Link href={`/aid-projects/${project.id}/edit`}>
                    <Button color="tomato" variant="surface">
                      <RiDeleteBin2Line size={20} />
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
