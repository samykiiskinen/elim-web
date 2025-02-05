import { prisma } from "@/prisma/client";
import ProjectForm from "../../_components/ProjectForm";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const EditProjectPage = async ({ params }: Props) => {
  const { id } = await params;
  const project = await prisma.project.findUnique({
    where: { id: parseInt(id) },
  });
  if (!project) notFound();
  return <ProjectForm project={project} />;
};

export default EditProjectPage;
