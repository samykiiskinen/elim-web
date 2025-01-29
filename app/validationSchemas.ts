import { z } from "zod";

export const createSongSchema = z.object({
    title: z.string().min(1, 'Ange sångtitel').max(255),
    text: z.string().min(1, 'Ingen sångtext'),
});
