import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const WorshipPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">LOVSÅNGSLISTOR</h1>
      <div className="mt-5">
        <Link href="/worship/songs">
          <Button variant="surface">SÅNGER</Button>
        </Link>
      </div>
    </div>
  );
};

export default WorshipPage;
