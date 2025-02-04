import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { GoPencil } from "react-icons/go";

const EditProjectButton = ({ projectId }: { projectId: number }) => {
  return (
    <Link href={`/aid-projects/${projectId}/edit`}>
      <Button color="gray" variant="surface">
        <GoPencil size={20} />
      </Button>
    </Link>
  );
};

export default EditProjectButton;
