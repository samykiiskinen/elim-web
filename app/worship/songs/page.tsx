import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const SongsPage = () => {
  return (
    <div>
      <Button>
        <Link href="songs/new">LÄGG TILL SÅNG</Link>
      </Button>
      <h1 className="text-3xl font-bold mt-5">SÅNGER</h1>
    </div>
  );
};

export default SongsPage;
