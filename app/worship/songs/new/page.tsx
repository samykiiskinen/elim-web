"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface SongForm {
  title: string;
  text: string;
}

const NewSongPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<SongForm>();
  return (
    <form
      className="max-w-md"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/songs", data);
        router.push("/worship/songs");
      })}
    >
      <TextField.Root
        placeholder="Sångtitel"
        {...register("title")}
      ></TextField.Root>
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Sångtext" {...field} className="mt-2" />
        )}
      ></Controller>
      <Button>SPARA</Button>
    </form>
  );
};

export default NewSongPage;
