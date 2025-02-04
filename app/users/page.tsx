import { prisma } from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { GoPencil } from "react-icons/go";
import { RiAddLargeFill, RiPagesLine } from "react-icons/ri";
import DeleteUserButton from "../components/DeleteUserButton";

const UsersPage = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      <div className="mb-3 space-x-2">
        <Button variant="surface">
          <Link href="users/new">LÄGG TILL ANVÄNDARE</Link>
        </Button>
        <Button variant="surface">
          <Link href="/worship">TILLBAKA</Link>
        </Button>
      </div>
      <div className="max-w-2xl">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ANVÄNDARE</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>ROLL</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <Button color="jade" variant="surface">
                    <RiAddLargeFill size={20} />
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Link href={`/users/${user.id}`}>
                    <Button color="gray" variant="surface">
                      <RiPagesLine size={20} />
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link href={`/users/${user.id}/edit`}>
                    <Button color="gray" variant="surface">
                      <GoPencil size={20} />
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <DeleteUserButton id={user.id}></DeleteUserButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default UsersPage;
