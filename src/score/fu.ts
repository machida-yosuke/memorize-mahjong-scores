import type { z } from "zod";
import { constructZodLiteralUnionType } from "./union";

export const FU = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110] as const;
export const fuSchema = constructZodLiteralUnionType([...FU]);
export type Fu = z.infer<typeof fuSchema>;
