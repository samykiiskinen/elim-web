"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SongForm {
  title: string;
  text: string;
}

const NewSongPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<SongForm>();
  const [error, setError] = useState("");
  return (
    <div className="max-w-md">
      {error && (
        <Callout.Root className="mb-2 font-bold" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/songs", data);
            router.push("/worship/songs");
          } catch (error) {
            setError("OOPS... NU BLEV DET NÅGOT FEL");
          }
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
    </div>
  );
};

export default NewSongPage;
