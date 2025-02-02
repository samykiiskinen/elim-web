"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { RiDeleteBin2Line } from "react-icons/ri";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <div>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="tomato" variant="surface">
            <RiDeleteBin2Line size={20} />
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>BEKRÄFTA BORTTAGNING AV SÅNG</AlertDialog.Title>
          <AlertDialog.Description>
            Är du säker på att sången ska tas bort? Det går inte att ångra i
            efterhand.
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button color="jade">NEJ, TA INTE BORT SÅNGEN</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                color="red"
                onClick={async () => {
                  await axios.delete("/api/songs/" + id);
                  router.push("/worship/songs");
                }}
              >
                JA, TA BORT SÅNGEN
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default DeleteButton;
