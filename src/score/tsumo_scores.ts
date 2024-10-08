import type { z } from "zod";
import { constructZodLiteralUnionType } from "./union";

export const TSUMO_SCORES = [
  300, 400, 500, 600, 700, 800, 1000, 1200, 1300, 1500, 1600, 1800, 2000, 2300,
  2600, 2900, 3000, 3200, 3600, 3900, 4000, 6000, 8000, 12000, 16000,
] as const;
export const tsumoScoreSchema = constructZodLiteralUnionType([...TSUMO_SCORES]);
export type TsumoScore = z.infer<typeof tsumoScoreSchema>;
