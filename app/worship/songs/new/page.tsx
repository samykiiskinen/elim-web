"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewSongPage = () => {
  return (
    <div className="max-w-md space-y-1">
      <TextField.Root placeholder="Titel"></TextField.Root>
      <SimpleMDE placeholder="Text" />
      <Button>SPARA</Button>
    </div>
  );
};

export default NewSongPage;
