import { z } from "zod";

export const songSchema = z.object({
    title: z.string().min(1, 'Ange sångtitel').max(255),
    text: z
    .string()
    .min(1, 'Sångtext saknas')
    .or(z.null())
    .refine(value => value !== null, 'Sångtext saknas') 
    .or(z.undefined())
    .refine(value => value !== undefined, 'Sångtext saknas') 
});

export const createProjectSchema = z.object({
    date: z.string(),
    accountNumber: z.string(),
    accountName: z.string(),
    country: z.string(),
    receiver: z.string(),
    purpose: z.string(),
    decision: z.string(),
    income: z.string(),
    expense: z.string()
});
