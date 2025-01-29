import { z } from "zod";

export const createSongSchema = z.object({
    title: z.string().min(1, 'Ange sångtitel').max(255),
    text: z
    .string()
    .min(1, 'Sångtext saknas')
    .or(z.null())
    .refine(value => value !== null, 'Sångtext saknas') 
    .or(z.undefined())
    .refine(value => value !== undefined, 'Sångtext saknas') 
});
