import { Project } from "@prisma/client";
import ProjectForm from "../_components/ProjectForm";

const NewProjectPage = ({ project }: { project: Project }) => {
  return <ProjectForm project={project} />;
};

export default NewProjectPage;
