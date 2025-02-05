import { prisma } from "@/prisma/client";
import { Button, Link } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const ProjectDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const project = await prisma.project.findUnique({
    where: { id: parseInt(id) },
  });

  if (!project) notFound();
  return (
    <>
      <div>
        <p>{`Datum: ${project.date}`}</p>
        <p>{`Konto: ${project.accountNumber}`}</p>
        <p>{`Kontonamn: ${project.accountName}`}</p>
        <p>{`Land: ${project.country}`}</p>
        <p>{`Mottagare: ${project.receiver}`}</p>
        <p>{`Ändamål: ${project.purpose}`}</p>
        <p>{`Beslut: ${project.decision}`}</p>
        <p>{`Inbetalning: ${project.income} kr`}</p>
        <p>{`Utbetalning: ${project.expense} kr`}</p>
      </div>
      <div className="mt-5">
        <Link href="/projects">
          <Button variant="surface">TILLBAKA</Button>
        </Link>
      </div>
    </>
  );
};

export default ProjectDetailPage;
