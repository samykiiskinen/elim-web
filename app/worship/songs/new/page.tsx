"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewSongPage = () => {
  return (
    <div className="max-w-md space-y-1">
      <TextField.Root placeholder="Titel"></TextField.Root>
      <TextArea placeholder="Text" />
      <Button>SPARA</Button>
    </div>
  );
};

export default NewSongPage;
