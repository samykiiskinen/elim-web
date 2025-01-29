"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSongSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type SongForm = z.infer<typeof createSongSchema>;

const NewSongPage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SongForm>({
    resolver: zodResolver(createSongSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/songs", data);
      router.push("/worship/songs");
    } catch (error) {
      setSubmitting(false);
      setError("OOPS... NU BLEV DET NÅGOT FEL");
    }
  });

  return (
    <div className="max-w-md">
      {error && (
        <Callout.Root className="mb-2 font-bold" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={onSubmit}>
        <TextField.Root
          placeholder="Sångtitel"
          {...register("title")}
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Sångtext" {...field} className="mt-2" />
          )}
        ></Controller>
        <ErrorMessage>{errors.text?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          SPARA {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewSongPage;
