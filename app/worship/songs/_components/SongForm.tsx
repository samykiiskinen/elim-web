"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { songSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import { Song } from "@prisma/client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type SongFormData = z.infer<typeof songSchema>;

const SongForm = ({ song }: { song?: Song }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SongFormData>({
    resolver: zodResolver(songSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (song) await axios.patch("/api/songs/" + song.id, data);
      else await axios.post("/api/songs", data);
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
          defaultValue={song?.title}
          placeholder="Sångtitel"
          {...register("title")}
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="text"
          control={control}
          defaultValue={song?.text}
          render={({ field }) => (
            <SimpleMDE placeholder="Sångtext" {...field} className="mt-2" />
          )}
        ></Controller>
        <ErrorMessage>{errors.text?.message}</ErrorMessage>
        <div className="space-x-2">
          <Button variant="surface" disabled={isSubmitting}>
            SPARA {isSubmitting && <Spinner />}
          </Button>
          <Button variant="surface">
            <Link href="/worship/songs">TILLBAKA</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SongForm;
