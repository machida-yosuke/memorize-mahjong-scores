import type { z } from "zod";
import { constructZodLiteralUnionType } from "./union";

export const HAN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;
export const hanSchema = constructZodLiteralUnionType([...HAN]);
export type Han = z.infer<typeof hanSchema>;
