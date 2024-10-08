import type { z } from "zod";
import { constructZodLiteralUnionType } from "./union";

export const RON_SCORES = [
  1000, 1300, 1500, 1600, 2000, 2300, 2400, 2600, 2900, 3200, 3400, 3600, 3900,
  4400, 4500, 4800, 5200, 5300, 5800, 6400, 6800, 7100, 7700, 8000, 8700, 9600,
  10600, 11600, 12000, 16000, 18000, 24000, 32000, 36000, 48000,
] as const;
export const ronScoreSchema = constructZodLiteralUnionType([...RON_SCORES]);
export type RonScore = z.infer<typeof ronScoreSchema>;
