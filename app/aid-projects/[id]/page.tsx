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
        <p>{project.receiver}</p>
        <p>{project.purpose}</p>
        <p>{project.income}</p>
        <p>{project.expense}</p>
      </div>
      <div className="mt-5">
        <Link href="/aid-projects">
          <Button>TILLBAKA</Button>
        </Link>
      </div>
    </>
  );
};

export default ProjectDetailPage;
