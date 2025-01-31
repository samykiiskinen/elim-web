"use client";
import { useRouter } from "next/navigation";
import { createProjectSchema } from "../../validationSchemas";
import { z } from "zod";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import ErrorMessage from "@/app/components/ErrorMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";
import { Label } from "@radix-ui/themes/components/context-menu";
import Link from "next/link";

type ProjectForm = z.infer<typeof createProjectSchema>;

const NewProjectPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectForm>({
    resolver: zodResolver(createProjectSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/aid-projects", data);
      router.push("/aid-projects");
    } catch (error) {
      setSubmitting(false);
      setError("OOPS... NU BLEV DET NÅGOT FEL");
    }
  });

  type ProjectField =
    | "date"
    | "accountNumber"
    | "accountName"
    | "country"
    | "receiver"
    | "purpose"
    | "decision"
    | "income"
    | "expense";

  interface FieldDefinition {
    label: string;
    field: ProjectField;
  }

  const tableFields: FieldDefinition[] = [
    { label: "Datum", field: "date" },
    { label: "Kontonummer", field: "accountNumber" },
    { label: "Kontonamn", field: "accountName" },
    { label: "Land", field: "country" },
    { label: "Mottagare", field: "receiver" },
    { label: "Ändamål", field: "purpose" },
    { label: "Beslut", field: "decision" },
    { label: "Inbetalning", field: "income" },
    { label: "Utbetalning", field: "expense" },
  ];

  return (
    <div className="max-w-md">
      {error && (
        <Callout.Root className="mb-2 font-bold" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={onSubmit}>
        {tableFields.map(({ label, field }) => (
          <div key={field} className="mb-1">
            <Label>{label}</Label>
            <TextField.Root {...register(field)}></TextField.Root>
          </div>
        ))}
        <ErrorMessage>{errors.date?.message}</ErrorMessage>
        <ErrorMessage>{errors.accountNumber?.message}</ErrorMessage>
        <ErrorMessage>{errors.accountName?.message}</ErrorMessage>
        <ErrorMessage>{errors.country?.message}</ErrorMessage>
        <ErrorMessage>{errors.receiver?.message}</ErrorMessage>
        <ErrorMessage>{errors.purpose?.message}</ErrorMessage>
        <ErrorMessage>{errors.decision?.message}</ErrorMessage>
        <ErrorMessage>{errors.income?.message}</ErrorMessage>
        <ErrorMessage>{errors.expense?.message}</ErrorMessage>
        <div className="mt-4 space-x-2">
          <Button variant="surface" disabled={isSubmitting}>
            SPARA {isSubmitting && <Spinner />}
          </Button>
          <Button variant="surface">
            <Link href="/aid-projects">TILLBAKA</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewProjectPage;
