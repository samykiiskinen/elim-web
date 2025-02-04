import { Button, Slot } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const WorshipPage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen p-5"
      style={{ backgroundImage: "url('/Note.png')" }}
    >
      <h1 className="text-3xl font-bold text-white">LOVSÅNGSLISTOR</h1>
      <div className="mt-5">
        <Link href="/worship/songs">
          <Button variant="surface">SÅNGER</Button>
        </Link>
      </div>
    </div>
  );
};

export default WorshipPage;
